use crate::core::app_state::AppState;
use crate::models::factorio_installation_model::FactorioInstallation;
use crate::infra::error::AppResult;

pub struct FactorioInstallationRepository;

pub fn save(installation: FactorioInstallation, state: &tauri::State<'_, AppState>) -> AppResult<FactorioInstallation> {
    let mut config = state.config.lock()?;

    config.installation = Some(installation.clone());
    config.save(&state.config_path)?;

    return Ok(installation);
}

pub fn get(state: &tauri::State<'_, AppState>) -> AppResult<Option<FactorioInstallation>> {
    let config = state.config.lock()?;
    return Ok(config.installation.clone());
}

pub fn clear(state: &tauri::State<'_, AppState>) -> AppResult<()> {
    let mut config = state.config.lock()?;

    config.installation = None;
    config.save(&state.config_path)?;

    return Ok(());
}
