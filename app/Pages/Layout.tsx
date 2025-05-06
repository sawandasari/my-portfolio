'use client';

import { ThemeProvider } from './themeContext'; // Correct path to the ThemeProvider
import Navbar from './navbar'; // Correct path to Navbar
import { useThemeContext } from './themeContext'; // Importing useThemeContext

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <MainLayout>{children}</MainLayout>
    </ThemeProvider>
  );
}

function MainLayout({ children }: { children: React.ReactNode }) {
  const { darkMode, toggleDarkMode } = useThemeContext(); // This works because ThemeProvider wraps it.

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {/* Navbar is inside ThemeProvider, so it can access useThemeContext */}
      <Navbar />

      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          padding: '10px',
          backgroundColor: darkMode ? '#333' : '#fff',
          color: darkMode ? '#fff' : '#000',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
        }}
        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Render children */}
      <main>{children}</main>
    </div>
  );
}
