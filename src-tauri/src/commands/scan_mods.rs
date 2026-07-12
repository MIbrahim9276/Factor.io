use crate::infra::error::IntoCommandResult;
use crate::models::mod_model::Mod;
use crate::core::app_state::AppState;
use crate::repositories::mod_repository;

#[tauri::command]
pub async fn scan_mods(state: tauri::State<'_, AppState>) -> Result<Vec<Mod>, String> {
    Ok(mod_repository::get_all(&state).into_command()?)
}