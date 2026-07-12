use std::path::PathBuf;

use crate::core::app_state::AppState;
use crate::core::types::ModInfo;
use crate::infra::error::{AppError, AppResult};
use crate::infra::filesystem::{list_path, read_file, read_zip_by_name};
use crate::models::mod_model::{Mod, ModDependency};

fn parse_dependency(raw_dependency: &str) -> ModDependency {
    let dependency = raw_dependency
        .trim()
        .trim_start_matches("(?)")
        .trim_start_matches('?')
        .trim_start_matches('!')
        .trim_start_matches('~')
        .trim();

    let mut parts = dependency.split_whitespace();
    let name = parts.next().unwrap_or_default().to_string();
    let operation = parts.next().map(str::to_string);
    let version = parts.next().map(str::to_string);

    ModDependency {
        name,
        operation,
        version
    }
}

fn parse_dependencies(raw_dependencies: Option<Vec<String>>) -> Vec<ModDependency> {
    raw_dependencies
        .unwrap_or_default()
        .iter()
        .map(|dependency| parse_dependency(dependency))
        .collect()
}

pub fn get_all(state: &tauri::State<'_, AppState>) -> AppResult<Vec<Mod>> {
    let config = state.config.lock()?;

    let mods_path_string = config.installation
        .as_ref()
        .ok_or(AppError::Other("No Factorio installation configured".to_string()))?
        .mods_path.clone();

    let mods_path = PathBuf::from(mods_path_string);

    let entries = list_path(&mods_path)?;

    let mut result: Vec<Mod> = Vec::new();
    for entry in entries {
        if entry.is_dir() && entry.join("info.json").is_file() {
            let info_path = entry.join("info.json");
            let info_content = read_file(&info_path)?;
            let info = serde_json::from_str::<ModInfo>(&info_content)?;

            let thumbnail_path = entry.join("thumbnail.png");

            let factorio_mod = Mod {
                name: info.name,
                version: info.version,
                title: info.title,
                author: info.author,
                description: info.description,
                dependencies: parse_dependencies(info.dependencies),
                factorio_version: info.factorio_version,
                homepage: info.homepage,
                enabled: None,
                path: entry.display().to_string(),
                thumbnail_path: Some(thumbnail_path.display().to_string())
            };

            result.push(factorio_mod);
        } else if entry.extension().is_some_and(|e| e == "zip") {
            let mut info_content = String::new();
            read_zip_by_name(&entry, "info.json", &mut info_content)?;
            let info = serde_json::from_str::<ModInfo>(&info_content)?;

            let thumbnail_path = entry.join("thumbnail.png");

            let factorio_mod = Mod {
                name: info.name,
                version: info.version,
                title: info.title,
                author: info.author,
                description: info.description,
                dependencies: parse_dependencies(info.dependencies),
                factorio_version: info.factorio_version,
                homepage: info.homepage,
                enabled: None,
                path: entry.display().to_string(),
                thumbnail_path: Some(thumbnail_path.display().to_string())
            };

            result.push(factorio_mod);
        }
    }

    Ok(result)
}
