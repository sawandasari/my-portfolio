'use client';  
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function About() {
    const { ref, inView } = useInView({
        triggerOnce: true,  
        threshold: 0.2,     
    });

    return (
        <section 
            id="about"
            ref={ref}
            style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s' }}
            className="flex flex-col md:flex-row items-center gap-8 px-16"
        >
            {/* Container for both text and image */}
            <div
                style={{
                    ...projectContainerStyle,
                    width: '95%', 
                    marginTop: '20px',
                    display: 'flex', // Flex container
                    flexDirection: 'row', // Place image and text side by side
                    justifyContent: 'space-between', // Distribute space
                    alignItems: 'stretch', // Align items vertically in the center
                }}
            >
                {/* Left: Text Section */}
                <div style={{ ...projectStyle1, width: '75%' }}>
                    <h1 >Hi there, I'm <strong>Sawan Dasari</strong></h1>
                    <p className="text-lg" style={{ width: '95%', fontSize: '1.25rem' }}>
                        I am an Application developer with a deep passion for technology and a broad range of experience across different areas of application development. From working with front-end and back-end technologies like ReactJS, TypeScript, JavaScript, PHP, Java, .Net, and Python. I enjoy tackling challenges across the full software stack, bringing my skills in programming to create innovative solutions.
                    </p>
                </div>

                {/* Right: Image Section */}
                <div style={{ ...projectStyle2, width: '35%'}}>
                    <Image 
                        src="/Images/img.jpg" 
                        alt="Sawan" 
                        width={300} 
                        height={300} 
                        style={{
                            borderRadius: '50%', // Makes the image circular
                            objectFit: 'cover',  // Ensures the image fits in the circle
                        }} 
                        className="my-image"
                    />
                </div>
            </div>
        </section>
    );
}

const projectContainerStyle = {
  display: 'flex',
  gap: '0px',
  flexDirection: 'row', 
  justifyContent: 'center',
  alignItems: 'center',
};

const projectStyle1 = {
    backgroundColor: '#fff',
    borderTopLeftRadius: '20px', 
    borderTopRightRadius: '0px',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '0px',
    padding: '20px',
    boxShadow: '0 0px 0px rgba(0,0,0,0.1)',
    width: '100%',
  };
  
const projectStyle2 = {
    backgroundColor: '#fff',
    borderTopLeftRadius: '0px', 
    borderTopRightRadius: '20px',
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '20px',
    padding: '20px',
    boxShadow: '0 0px 0px rgba(0,0,0,0.1)',
    width: '100%',
  };