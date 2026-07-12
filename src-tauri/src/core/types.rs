use serde::Deserialize;

#[derive(Debug, Deserialize)]
pub struct FactorioInfo {
    pub version: String,
}

#[derive(Debug, Deserialize)]
pub struct ModInfo {
    pub name: String,
    pub version: String,
    pub title: String,
    pub author: String,
    pub description: String,
    pub dependencies: Option<Vec<String>>,
    pub factorio_version: Option<String>,
    pub homepage: Option<String>
}
