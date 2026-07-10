use serde::de::DeserializeOwned;

use crate::infra::error::AppResult;

pub fn parse<T>(content: &str) -> AppResult<T> where T: DeserializeOwned {
    return Ok(serde_json::from_str(content)?);
}