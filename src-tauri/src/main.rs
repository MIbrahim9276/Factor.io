// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tracing::info;

use crate::core::logging::init_logging;

mod core;

fn main() {
    let app_config = core::config::AppConfig::load("../config.ini");

    init_logging(&app_config);
    
    info!("app started");

    factor_io_lib::run();

}
