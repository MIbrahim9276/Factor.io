use ini::Ini;

pub struct LogConfig {
    pub level: String,
    pub file_logging: bool,
    pub console_logging: bool,
    pub log_dir: String,
    pub file_name: String
}

pub struct AppConfig {
    pub log_config: LogConfig
}

fn load_log_config(conf: &Ini) -> LogConfig {
    let section = conf.section(Some("logging"))
        .expect("Missing [logging] section");

    let config = LogConfig {
        level: section.get("level").unwrap_or("info").to_string(),
        file_logging: section.get("file_logging")
            .unwrap_or("true")
            .parse::<bool>()
            .unwrap_or(true),
        console_logging: section.get("console_logging")
            .unwrap_or("true")
            .parse::<bool>()
            .unwrap_or(true),
        log_dir: section.get("log_dir").unwrap_or("logs").to_string(),
        file_name: section.get("file_name").unwrap_or("app.log").to_string()
    };

    return config;
}

impl AppConfig {   
    pub fn load(path: &str) -> Self {
        let conf = Ini::load_from_file(path)
            .expect("Failed to load config.ini");

        let log_config = load_log_config(&conf);

        return AppConfig {
            log_config: log_config
        };
    }
}