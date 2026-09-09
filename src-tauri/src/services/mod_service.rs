use std::collections::HashMap;

use crate::core::app_state::AppState;
use crate::infra::error::AppResult;
use crate::models::mod_model::Mod;
use crate::repositories::{mod_list_repository, mod_repository};

pub fn get_all(state: tauri::State<'_, AppState>) -> AppResult<Vec<Mod>> {
    let mut installed_mods = mod_repository::get_all(&state)?;
    let mod_list_info = mod_list_repository::get(&state)?;

    let enabled_by_name: HashMap<_, _> = mod_list_info
        .mods
        .into_iter()
        .map(|m| (m.name, m.enabled))
        .collect();

    for installed_mod in &mut installed_mods {
        if let Some(enabled) = enabled_by_name.get(&installed_mod.name) {
            installed_mod.enabled = *enabled;
        }
    }

    Ok(installed_mods)
}