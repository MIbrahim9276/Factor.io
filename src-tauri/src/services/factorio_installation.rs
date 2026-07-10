use std::env;
use std::path::PathBuf;

use serde::Deserialize;

use crate::core::app_state::AppState;
use crate::infra::error::{AppError, AppResult};
use crate::models::factorio_installation::FactorioInstallation;
use crate::repositories::factorio_installation::FactorioInstallationRepository;

#[derive(Debug, Deserialize)]
struct FactorioInfo {
    version: String,
}

pub fn locate_installation(path: String, state: tauri::State<'_, AppState>) -> AppResult<FactorioInstallation>{
    let install_path = PathBuf::from(path);

    if !install_path.is_dir() {
        return Err(AppError::Other("Selected path is not a directory".to_string()));
    }

    let executable_path = install_path.join("bin").join("x64").join("factorio.exe");
    if !executable_path.is_file() {
        return Err(AppError::Other(
            "Selected folder does not look like a Factorio installation".to_string(),
        ));
    }

    let info_path = install_path.join("data").join("base").join("info.json");
    if !info_path.is_file() {
        return Err(AppError::Other(
            "Could not find Factorio base info.json".to_string(),
        ));
    }
    let info_content = std::fs::read_to_string(info_path)?;
    let info = serde_json::from_str::<FactorioInfo>(&info_content)?;

    let appdata = env::var("APPDATA").map_err(|_| {
        AppError::Other("Could not resolve APPDATA for Factorio user data".to_string())
    })?;

    let user_data_path = PathBuf::from(appdata).join("Factorio");

    let installation = FactorioInstallation {
        id: install_path.to_string_lossy().to_string(),
        path: install_path.to_string_lossy().to_string(),
        mods_path: user_data_path.join("mods").to_string_lossy().to_string(),
        saves_path: user_data_path.join("saves").to_string_lossy().to_string(),
        version: info.version,
    };

    FactorioInstallationRepository::save(installation, state)
}