import { useEffect, useState } from 'react';
import Button from '../Button/Button';

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState(() => {
        const localThemeValue = window.localStorage.getItem("theme");
        return localThemeValue !== null ? localThemeValue : null;
    });

    useEffect(() => {
        if (theme !== null) {
            document.documentElement.setAttribute('data-theme', theme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);

        window.localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };
    
    return (
        <Button label={'dark_mode'} classItem={'m-btn ctrl-btn material-symbols-outlined'} onclick={toggleTheme} />
    );
}