use std::env;
use std::path::{Path, PathBuf};

use serde::Deserialize;

use crate::core::app_state::AppState;
use crate::infra::codec::json;
use crate::infra::error::{AppError, AppResult};
use crate::models::factorio_installation::FactorioInstallation;
use crate::repositories::factorio_installation::FactorioInstallationRepository;

const DEFAULT_INSTALLATION_PATHS: [&str; 1] = [
    r"C:\Steam\steamapps\common\Factorio"
];

#[derive(Debug, Deserialize)]
struct FactorioInfo {
    version: String,
}

fn validate_installation(path: &Path) -> AppResult<FactorioInfo> {
    if !path.is_dir() {
        return Err(AppError::Other("Selected path is not a directory".to_string()));
    }

    let executable = path.join("bin").join("x64").join("factorio.exe");
    if !executable.is_file() {
        return Err(AppError::Other(
            "Selected folder does not look like a Factorio installation".to_string(),
        ));
    }

    let info_path = path.join("data").join("base").join("info.json");
    if !info_path.is_file() {
        return Err(AppError::Other(
            "Could not find Factorio base info.json".into(),
        ));
    }
    let contents = std::fs::read_to_string(info_path)?;

    Ok(json::parse::<FactorioInfo>(&contents)?)
}

fn build_installation(path: &Path, info: FactorioInfo) -> AppResult<FactorioInstallation> {
    let appdata = env::var("APPDATA")
        .map_err(|_| AppError::Other("Could not resolve APPDATA".into()))?;

    let user_data = PathBuf::from(appdata).join("Factorio");

    Ok(FactorioInstallation {
        id: path.to_string_lossy().into_owned(),
        path: path.to_string_lossy().into_owned(),
        mods_path: user_data.join("mods").to_string_lossy().into_owned(),
        saves_path: user_data.join("saves").to_string_lossy().into_owned(),
        version: info.version,
    })
}

pub fn detect_installation(state: tauri::State<'_, AppState>) -> AppResult<FactorioInstallation> {
    if let Some(installation) = FactorioInstallationRepository::get(&state)? {
        return Ok(installation);
    }

    for path in DEFAULT_INSTALLATION_PATHS {
        let install_path = PathBuf::from(path);

        if let Ok(info) = validate_installation(&install_path) {
            let installation = build_installation(&install_path, info)?;
            return FactorioInstallationRepository::save(installation, &state);
        }
    }

    Err(AppError::Other("No Factorio installation found".into()))
}

pub fn locate_installation(path: String, state: tauri::State<'_, AppState>) -> AppResult<FactorioInstallation> {
    let install_path = PathBuf::from(path);

    let info = validate_installation(&install_path)?;
    let installation = build_installation(&install_path, info)?;

    FactorioInstallationRepository::save(installation, &state)
}
