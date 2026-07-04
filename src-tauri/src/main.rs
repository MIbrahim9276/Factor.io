// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod core;

fn main() {
    let app_config = core::config::AppConfig::load("../config.ini");

    

    factor_io_lib::run();
}
