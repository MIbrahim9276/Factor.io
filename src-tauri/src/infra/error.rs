use std::sync::PoisonError;

use thiserror::Error;


#[derive(Debug, Error)]
pub enum AppError {
    #[error("I/O error: {0}")]
    Io(#[from] std::io::Error),

    #[error("TOML deserialization error: {0}")]
    TomlDeserialize(#[from] toml::de::Error),

    #[error("TOML serialization error: {0}")]
    TomlSerialize(#[from] toml::ser::Error),

    #[error("JSON deserialization error: {0}")]
    JsonDeserialize(#[from] serde_json::Error),

    #[error("Lock error: {0}")]
    Lock(String),

    #[error("Zip error: {0}")]
    Zip(#[from] zip::result::ZipError),

    #[error("{0}")]
    Other(String)
}

impl<T> From<PoisonError<T>> for AppError {
    fn from(value: PoisonError<T>) -> Self {
        Self::Lock(value.to_string())
    }
}

pub type AppResult<T> = Result<T, AppError>;

pub trait IntoCommandResult<T> {
    fn into_command(self) -> Result<T, String>;
}

impl<T> IntoCommandResult<T> for AppResult<T> {
    fn into_command(self) -> Result<T, String> {
        self.map_err(|e| e.to_string())
    }
}