use std::fs::{self, File};
use std::io::Read;
use std::path::{Path, PathBuf};

use zip::ZipArchive;

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

pub fn list_path(path: &Path) -> AppResult<Vec<PathBuf>> {
    let entries = fs::read_dir(path)?;
    
    let mut result: Vec<PathBuf> = Vec::new();
    for entry in entries {
        let entry = entry?;
        let path = entry.path();

        result.push(path);
    }

    Ok(result)
}

pub fn read_zip_by_name(path: &Path, name: &str, buf: &mut String) -> AppResult<()> {
    let file = File::open(path)?;
    let mut archive = ZipArchive::new(file)?;

    for i in 0..archive.len() {
        let mut file = archive.by_index(i)?;

        if file.name().ends_with(name) {
            file.read_to_string(buf)?;
        }
    }
    
    Ok(())
}