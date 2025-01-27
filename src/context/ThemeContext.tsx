import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: Theme;
}

interface Theme {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  primaryColor: string;
  secondaryColor: string;
  inputBackground: string;
}

const darkTheme: Theme = {
  backgroundColor: '#121212',
  textColor: '#FFFFFF',
  borderColor: '#333333',
  primaryColor: '#BB86FC',
  secondaryColor: '#03DAC6',
  inputBackground: '#1E1E1E',
};

const lightTheme: Theme = {
  backgroundColor: '#FFFFFF',
  textColor: '#000000',
  borderColor: '#EEEEEE',
  primaryColor: '#007AFF',
  secondaryColor: '#5856D6',
  inputBackground: '#FFFFFF',
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
