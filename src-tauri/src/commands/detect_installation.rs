use crate::infra::error::IntoCommandResult;
use crate::models::factorio_installation_model::FactorioInstallation;
use crate::services::factorio_installation_service;
use crate::core::app_state::AppState;

#[tauri::command]
pub async fn detect_installation(state: tauri::State<'_, AppState>) -> Result<FactorioInstallation, String> {
    Ok(factorio_installation_service::detect_installation(state).into_command()?)
}