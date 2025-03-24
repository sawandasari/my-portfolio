// app/pages/Navbar.tsx
'use client';  
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={navbarStyle}>
      <ul style={navbarListStyle}>
        <li><Link href="#about" style={linkStyle}>About</Link></li>
        <li><Link href="#work" style={linkStyle}>Work Experience</Link></li>
        <li><Link href="#education" style={linkStyle}>Education</Link></li>
        <li><Link href="#certifications" style={linkStyle}>Certifications</Link></li>
        <li><Link href="#projects" style={linkStyle}>Projects</Link></li>
        <li><Link href="#contact" style={linkStyle}>Contact</Link></li>
      </ul>
    </nav>
  );
}

// Example inline styling
const navbarStyle = {
  backgroundColor: '#000', // Black background
  padding: '10px 0',
};

const navbarListStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};

const linkStyle = {
  color: '#fff', // White text
  textDecoration: 'none',
};
