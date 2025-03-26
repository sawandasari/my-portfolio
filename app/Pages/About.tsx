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
            {/* Left: Text Section */}
            <div 
            className="md:pl-8"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', flex: 1, marginTop:'20px' }}>
                <h1>Hi there, I'm <strong>Sawan Dasari</strong></h1>
                <p className="text-lg">
                    I am an Application developer with a deep passion for technology and a broad range of experience across different areas <br/>
                    of application development. From building working with front-end and back-end technologies like ReactJS, TypeScript,JavaScript <br/>
                    PHP, Java, .Net, and Python. I enjoy tackling challenges across the full software stack, bringing my skills in programming to create innovative solutions.
                </p>
            </div>

            {/* Right: Image Section */}
            <div 
                style={{
                    
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'left', 
                    flex: 1,
                    height: '-100%',
                }}
            >
                <Image 
                    src="/Images/myself.jpg" 
                    alt="Sawan" 
                    width={200} 
                    height={200} 
                    style={{
                        borderRadius: '50%', 
                        objectFit: 'cover',  // Ensure the image fits in the circle
                    }} 
                    className="my-image"
                />
            </div>
        </section>
    );
}
