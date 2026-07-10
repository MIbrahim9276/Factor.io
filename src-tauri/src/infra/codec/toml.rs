use crate::infra::error::AppResult;
use serde::de::DeserializeOwned;
use serde::Serialize;

pub fn parse<T>(content: &str) -> AppResult<T> where T: DeserializeOwned {
    return Ok(toml::from_str(content)?);
}

pub fn serialize<T>(object: &T) -> AppResult<String> where T: Serialize {
    return Ok(toml::to_string_pretty(object)?);
}