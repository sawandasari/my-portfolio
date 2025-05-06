'use client';

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function WorkExperience() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Triggers the animation only once
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  // State to track expanded sections for both experiences
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  // Function to toggle expanded section
  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Work experience data
  const workExperience = [
    {
      title: 'Software Engineer II',
      duration: 'Jan 2024 - Present',
      company: 'State Street Corporation, Boston, USA',
      details: [],
    },
  ];

  const workExperience1 = [
    {
      title: 'Software Engineer',
      duration: 'Jan 2022 - Dec 2022',
      company: 'State Street Corporation, Hyderabad, India',
      details: [],
    },
  ];

  const workExperience2 = [
    {
      title: 'Associate Software Engineer',
      duration: 'June 2019 - Dec 2020',
      company: 'Adobe, Hyderabad, India',
      details: [],
    },
  ];

  return (
    <section
      id="work"
      ref={ref}
      style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s', marginTop: '20px' }}
      className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
      
      <div
        style={{display: 'flex',
          flexDirection: 'column',
          gap: '10px',}}
        className="flex flex-col gap-6">
        {[...workExperience, ...workExperience1, ...workExperience2].map((job, index) => (
          <div
            key={index}
            style={projectStyle}
            className={`bg-white rounded-lg p-6 shadow-md transition-all duration-500 ${
              expanded[index] ? 'h-auto' : 'h-40 overflow-hidden'
            }`}
          >
            <h3 
            style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
            className="text-lg font-semibold flex justify-between">
              <span>{job.title}</span>
              <span style={{ marginLeft: 'auto' }} className="text-gray-500">{job.duration}</span>
            </h3>
            <p className="text-gray-700 font-medium">
              {job.company}
            </p>

            {/* Show details only when expanded */}
            {expanded[index] && (
              <ul 
              style={{ marginLeft: '20px' }}
              className="mt-5 ml-5 space-y-3 list-disc">
                {job.details.map((point, i) => (
                  <li
                  key={i} className="ml-5">{point}</li>
                ))}
                
              </ul>
            )}

            {/* Expand/Collapse Button */}
            <button
              style={{ marginTop: '20px' }} 
              onClick={() => toggleExpand(index)}
              className="mt-4 text-blue-500 hover:underline flex justify-center"
            >
              {expanded[index] ? 'Show Less' : 'More Details'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

const projectContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const projectStyle = {
  backgroundColor: '#fff',
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  width: '95%',
};
