use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct ModDependency {
    pub name: String,
    pub operation: Option<String>,
    pub version: Option<String>
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Mod {
    pub name: String,
    pub version: String,
    pub title: String,
    pub author: String,
    pub description: String,
    pub dependencies: Vec<ModDependency>,
    pub factorio_version: Option<String>,
    pub homepage: Option<String>,
    pub enabled: bool,
    pub path: String,
    pub thumbnail_path: Option<String>
}
