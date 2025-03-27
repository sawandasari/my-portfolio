'use client';  
import Image from 'next/image';


import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';




export default function Contact() {
    const { ref, inView } = useInView({
        triggerOnce: true,  // Triggers the animation only once
        threshold: 0.2,     // Trigger when 20% of the element is visible
      });
    
  return (
    <section id="contact" ref={ref} style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s', marginTop: '20px', marginBottom: '100px' }}>
      <h2>Get in Touch</h2>
      <div style={projectContainerStyle}>
        <p style={{...projectStyle, fontSize: '1.15rem'}}>
          <strong>I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.</strong>
      <br/><br/> 
        <strong>Email: </strong>sawan.dasari@gmail.com
      <br/>
        <strong>Linkedin: </strong><a href="https://www.linkedin.com/in/sawan-dasari" target="_blank" rel="noopener noreferrer">sawan_dasari</a><br/>
        <strong>GitHub: </strong><a href="https://github.com/sawandasari" target="_blank" rel="noopener noreferrer">sawandasari</a>
        </p>
      </div>
    </section>
  );
}

const projectContainerStyle = {
  display: 'flex',
  gap: '20px',
};


const projectStyle = {
  backgroundColor: '#fff',
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  width: '95%',
};