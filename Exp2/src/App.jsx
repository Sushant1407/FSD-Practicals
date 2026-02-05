import React, { useState, useMemo } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { AuthProvider, useAuth } from './context/AuthContext';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

const AppContent = () => {
  const { currentUser } = useAuth();
  const [mode, setMode] = useState('light');
  const [view, setView] = useState('landing');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#2e7d32',
            dark: '#1b5e20',
            light: '#4caf50',
          },
          success: {
            main: '#2e7d32',
          },
          background: {
            default: mode === 'light' ? '#f5f7fa' : '#121212',
            paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                textTransform: 'none',
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                boxShadow:
                  mode === 'light'
                    ? '0 4px 12px rgba(0,0,0,0.1)'
                    : '0 4px 12px rgba(0,0,0,0.5)',
                borderRadius: 12,
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                boxShadow: 'none',
                borderBottom: `1px solid ${mode === 'light' ? '#eee' : '#333'}`,
              },
            },
          },
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const handleGetStarted = () => {
    setView('login');
  };

  const handleSwitchToRegister = () => {
    setView('register');
  };

  const handleSwitchToLogin = () => {
    setView('login');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!currentUser ? (
        view === 'landing' ? (
          <LandingPage onGetStarted={handleGetStarted} />
        ) : view === 'login' ? (
          <Login onSwitchToRegister={handleSwitchToRegister} />
        ) : (
          <Register onSwitchToLogin={handleSwitchToLogin} />
        )
      ) : (
        <Dashboard onThemeToggle={toggleTheme} isDarkMode={mode === 'dark'} />
      )}
    </ThemeProvider>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
