use std::sync::Mutex;

use tauri::Manager;

use crate::core::config::AppConfig;
use crate::core::app_state::AppState;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
pub mod models;
pub mod commands;
pub mod repositories;
pub mod infra;
pub mod core;
pub mod services;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            let config_path = app.path().app_config_dir()?.join("config.toml");
            let config = AppConfig::load(&config_path)?;

            app.manage(AppState {
                config_path,
                config: Mutex::new(config)
            });

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            commands::detect_installation::detect_installation,
            commands::locate_installation::locate_installation,
            commands::scan_mods::scan_mods
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
