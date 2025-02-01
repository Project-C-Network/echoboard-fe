import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedMode: string | null = localStorage.getItem('darkMode');
    if (savedMode === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('darkModeEnabled');
      document.body.classList.remove('lightModeEnabled');
    } else {
      setIsDarkMode(false);
      document.body.classList.add('lightModeEnabled');
      document.body.classList.remove('darkModeEnabled');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode: boolean = !prevMode;
      const mode: string = newMode ? 'dark' : 'light';
      localStorage.setItem('darkMode', mode);
      if (newMode) {
        document.body.classList.add('darkModeEnabled');
        document.body.classList.remove('lightModeEnabled');
      } else {
        document.body.classList.add('lightModeEnabled');
        document.body.classList.remove('darkModeEnabled');
      }
      return newMode;
    });
  };

  return { isDarkMode, toggleDarkMode };
};
