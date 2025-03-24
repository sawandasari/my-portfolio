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
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-16"
            id="about"
            ref={ref}
            style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s' }}
        >
            {/* Left: Text Section */}
            <div className="md:pl-8">
            <h1>Hi there, I'm <strong>Sawan Dasari</strong></h1>
                <p className="text-lg">
                    I am a software developer with a deep passion for technology and a broad range of experience <br />
                    across different areas of software development. From building automation solutions with Blue Prism, and UiPath to working with <br />
                    front-end and back-end technologies like ReactJS, TypeScript, Java, Django, and Python. I enjoy tackling challenges across the <br />
                    full software stack, bringing my skills in programming and automation together to create innovative solutions.
                </p>
            </div>

            {/* Right: Image Section */}
            <div className="flex justify-center">
                <Image 
                    src="/Images/myself.jpg" 
                    alt="Sawan" 
                    width={200} 
                    height={200} 
                    style={{  marginLeft: '1000px', marginTop: '-120px', borderRadius: '50%' }} 
                    className="my-image"
                />
            </div>
        </section>
    );
}
