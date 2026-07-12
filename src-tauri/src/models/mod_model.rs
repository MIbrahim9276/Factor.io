use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Mod {
    pub name: String,
    pub version: String,
    pub title: String,
    pub author: String,
    pub description: String,
    pub enabled: Option<bool>,
    pub path: String,
    pub thumbnail_path: Option<String>
}