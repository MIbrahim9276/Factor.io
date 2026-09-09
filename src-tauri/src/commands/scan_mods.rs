use crate::infra::error::IntoCommandResult;
use crate::models::mod_model::Mod;
use crate::core::app_state::AppState;
use crate::services::mod_service;

#[tauri::command]
pub async fn scan_mods(state: tauri::State<'_, AppState>) -> Result<Vec<Mod>, String> {
    Ok(mod_service::get_all(&state).into_command()?)
}