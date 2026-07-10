use std::{fs, path::Path};

use crate::infra::error::AppResult;

pub fn read_file(path: &Path) -> AppResult<String> {
    return Ok(fs::read_to_string(path)?);
}

pub fn save_to_file(path: &Path, content: &str) -> AppResult<()> {
    if let Some(parent) = path.parent() {
        fs::create_dir_all(parent)?;
    }
    return Ok(fs::write(path, content)?);
}