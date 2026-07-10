use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct FactorioInstallation {
    pub id: String,
    pub path: String,
    pub mods_path: String,
    pub saves_path: String,
    pub version: String   
}