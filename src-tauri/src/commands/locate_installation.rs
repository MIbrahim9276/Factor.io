use crate::infra::error::IntoCommandResult;
use crate::models::factorio_installation_model::FactorioInstallation;
use crate::services::factorio_installation_service;
use crate::core::app_state::AppState;

#[tauri::command]
pub async fn locate_installation(path: String, state: tauri::State<'_, AppState>) -> Result<FactorioInstallation, String> {
    Ok(factorio_installation_service::locate_installation(path, state).into_command()?)
}