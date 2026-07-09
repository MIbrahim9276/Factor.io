type Theme = 'system' | 'light' | 'dark';

export interface Settings {
    theme: Theme;
    enableLogging: boolean;
}