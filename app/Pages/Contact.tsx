'use client';  
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
    const { ref, inView } = useInView({
        triggerOnce: true,  // Triggers the animation only once
        threshold: 0.2,     // Trigger when 20% of the element is visible
      });
  return (
    <section id="contact" ref={ref} style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s' }}>
      <h2>Contact me at: </h2>
      
      <p>
        Phone:
        Email:
        Linkedin:
      </p>
    </section>
  );
}
