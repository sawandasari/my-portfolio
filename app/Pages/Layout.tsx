'use client';

import { ThemeProvider, useTheme } from './themeContext'; // Correct path
import Navbar from './navbar'; // Correct path since Navbar is in the same folder

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <MainLayout>{children}</MainLayout>
    </ThemeProvider>
  );
}

function MainLayout({ children }: { children: React.ReactNode }) {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {/* Navbar is inside ThemeProvider, so it can access useTheme */}
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
