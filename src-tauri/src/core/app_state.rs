use std::{path::PathBuf, sync::Mutex};

use crate::core::config::AppConfig;

pub struct AppState {
    pub config_path: PathBuf,
    pub config: Mutex<AppConfig>
}