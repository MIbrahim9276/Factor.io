use tracing_subscriber::{EnvFilter, Registry, fmt, layer::SubscriberExt, util::SubscriberInitExt};
use tracing_appender::{non_blocking, rolling};
use std::sync::OnceLock;

use crate::core::config::AppConfig;

static LOG_GUARD: OnceLock<tracing_appender::non_blocking::WorkerGuard> = OnceLock::new();

pub fn init_logging(config: &AppConfig) {
    let filter = EnvFilter::new(&config.log_config.level);

    let console_layer = if config.log_config.console_logging {
        Some(fmt::layer().with_ansi(true).pretty())
    } else {
        None
    };

    let file_layer = if config.log_config.file_logging {
        let file_appender = rolling::daily(&config.log_config.log_dir, &config.log_config.file_name);
        let (writer, guard) = tracing_appender::non_blocking(file_appender);
        LOG_GUARD.set(guard).ok();

        Some(fmt::layer().with_ansi(false).with_writer(writer).compact())
    } else {
        None
    };

    let subscriber = tracing_subscriber::registry()
        .with(console_layer)
        .with(file_layer)
        .with(filter);

    subscriber.init();
}