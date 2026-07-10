use std::path::Path;

use serde::{Deserialize, Serialize};

use crate::infra::error::AppResult;
use crate::models::factorio_installation::FactorioInstallation;
use crate::infra::filesystem::{read_file, save_to_file};
use crate::infra::codec::toml::{parse, serialize};

#[derive(Debug, Serialize, Deserialize, Default)]
pub struct AppConfig {
    pub installation: Option<FactorioInstallation>
}

impl AppConfig {
    pub fn load(path: &Path) -> AppResult<Self> {
        if !path.exists() {
            return Ok(Self::default());
        }
        let content = read_file(path)?;
        let parsed = parse::<AppConfig>(&content)?;
        return Ok(parsed);
    }

    pub fn save(&self, path: &Path) -> AppResult<()> {
        let content = serialize(self)?;
        return Ok(save_to_file(path, &content)?);
    }
}