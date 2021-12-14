import React from 'react';

export type ThemeType = 'light' | 'dark';

export const useThemeMode = (): [ThemeType, (type: ThemeType) => void] => {
  const [theme, setTheme] = React.useState<ThemeType>('dark');

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return [theme, setTheme];
};
