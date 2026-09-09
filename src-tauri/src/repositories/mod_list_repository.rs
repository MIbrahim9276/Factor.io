use std::path::PathBuf;

use crate::core::types::ModListInfo;
use crate::infra::error::{AppError, AppResult};
use crate::core::app_state::AppState;
use crate::infra::filesystem::read_file;

pub fn get(state: &tauri::State<'_, AppState>) -> AppResult<ModListInfo> {
    let config = state.config.lock()?;

    let mods_path_string = config.installation
        .as_ref()
        .ok_or(AppError::Other("No Factorio installation configured".to_string()))?
        .mods_path.clone();

    let mods_path = PathBuf::from(mods_path_string);

    let mods_list_path = mods_path.join("mod-list.json");

    let content = read_file(&mods_list_path)?;

    Ok(serde_json::from_str::<ModListInfo>(&content)?)
}