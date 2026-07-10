use crate::infra::error::IntoCommandResult;
use crate::models::factorio_installation::FactorioInstallation;
use crate::services::factorio_installation;
use crate::core::app_state::AppState;

#[tauri::command]
pub async fn detect_installation(state: tauri::State<'_, AppState>) -> Result<FactorioInstallation, String> {
    Ok(factorio_installation::detect_installation(state).into_command()?)
}