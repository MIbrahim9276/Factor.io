import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

const possibleThemes = ['light', 'dark'];

type Theme = 'light' | 'dark';
type ThemeWithSystem = Theme | 'system';

interface ThemeProviderState {
    theme: ThemeWithSystem;
    setTheme: (theme: Theme) => void;
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

interface ThemeProviderProps extends PropsWithChildren {
    defaultTheme?: ThemeWithSystem;
    storageKey?: string;
}
export function ThemeProvider({
    children,
    defaultTheme = 'system',
    storageKey = 'theme'
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<ThemeWithSystem>(() => {
        return (localStorage.getItem(storageKey) as ThemeWithSystem) || defaultTheme
    });

    useEffect(() => {
        const root = window.document.documentElement;

        function applyTheme(resolved: Theme) {
            root.classList.remove(...possibleThemes);
            root.classList.add(resolved);
        }

        function getSystemTheme() {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        let resolved: Theme;

        if (theme === 'system') resolved = getSystemTheme();
        else resolved = theme;

        applyTheme(resolved);
        localStorage.setItem(storageKey, theme);
    }, [theme]);

    return (
        <ThemeProviderContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeProviderContext);
    if (!context) throw new Error("useTheme must be used within ThemeProvider");
    return context;
}