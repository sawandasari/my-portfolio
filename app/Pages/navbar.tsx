'use client';

import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { useThemeContext } from './themeContext'; // Import from the correct path

export default function Navbar() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  //const { darkMode, toggleDarkMode } = useThemeContext(); 

 
  return (
    <div ref={ref} style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s', marginTop: '0px', marginBottom: '20px' }}>
    <nav style={navbarStyle}>
      <ul style={navbarListStyle}>
        <li><Link href="#about" className="navbar-link">About</Link></li>
        <li><Link href="#work" className="navbar-link">Work Experience</Link></li>
        <li><Link href="#education" className="navbar-link">Education</Link></li>
        <li><Link href="#certifications" className="navbar-link">Certifications</Link></li>
        <li><Link href="#projects" className="navbar-link">Projects</Link></li>
        <li><Link href="#contact" className="navbar-link">Contact</Link></li>
        {/*<li>
          <button
            onClick={toggleDarkMode}
            className="navbar-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </li> */}
      </ul>
    </nav>
    </div>
  );
}


const navbarStyle = {
  backgroundColor: '#000', // Black background
  padding: '10px',
};

const navbarListStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};
