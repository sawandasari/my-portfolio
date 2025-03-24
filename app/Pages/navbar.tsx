// app/Components/Navbar.tsx
'use client';  
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

export default function Navbar() {
  const { ref, inView } = useInView({
      triggerOnce: true,  // Triggers the animation only once
      threshold: 0.2,     // Trigger when 20% of the element is visible
    });
  return (
    <nav style={navbarStyle}>
      <ul style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s' }}>
        </ul>
      <ul style={navbarListStyle}>
        <li><Link href="#about"   className="navbar-link">About</Link></li>
        <li><Link href="#work"  className="navbar-link">Work Experience</Link></li>
        <li><Link href="#education"  className="navbar-link">Education</Link></li>
        <li><Link href="#certifications" className="navbar-link">Certifications</Link></li>
        <li><Link href="#projects"  className="navbar-link">Projects</Link></li>
        <li><Link href="#contact" className="navbar-link">Contact</Link></li>
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
