'use client';  
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function About() {
    const { ref, inView } = useInView({
        triggerOnce: true,  // Triggers the animation only once
        threshold: 0.2,     // Trigger when 20% of the element is visible
      });
  return (
    <section id="about" ref={ref} style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s' }}>
      <h2>About Me</h2>
      <Image 
        src="/Images/myself.jpg" 
        alt="sawan" 
        width={150} 
        height={150} 
        style={{ borderRadius: '50%' }} 
      />
      <p>
        Hello, I’m a passionate developer with experience in Java, Next.js, and more.
      </p>
    </section>
  );
}
