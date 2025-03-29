'use client';

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Education() {
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

  // Education data
  const Education = [
    {
      title: 'Masters of Science in Information Technology',
      duration: 'Jan 2022 - April 2023',
      univ: 'University of Cincinnati, Cincinnati, USA',
      courses: 'These are the few Courses I have Taken:',
      details: [
        "Human Computer Interaction & Usability",
        "Technology for mobile Applications",
        "Machine learning and Data Mining",
        "Advnaced Algorithms",
        "Advanced Storage Technologies",
        "Principles of Cybersecurity",
      ],
      
    },
  ];

  const Education1 = [
    {
      title: 'Bacherlors of Technology in Computer Science and Engineering',
      duration: 'June 2017 - June 2021',
      univ: 'BV Raju Institue of Technology, Hyderabad, India',
      courses: 'These are the few Courses I have Taken:',
      details: [
       "Computer Proramming through C/C++",
        "Advanced Data Structures through C++",
        "Mathematics - II",
        "Java Programming",
        "Database Management Systems",
        "Design and analsys of Algorithms",
        "Computer Networks",
        "Web Technologies",
        "Scripting Languages",
        "Cloud Services and Visualization"
      ],
    },
  ];

  return (
    <section
      id="education"
      ref={ref}
      style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s', marginTop: '20px' }}
      className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      
      <div 
        className="flex flex-col gap-6"
        style={{display: 'flex', flexDirection: 'column',
          gap: '10px'}}
        >
        {[...Education, ...Education1].map((ed, index) => (
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
              <span>{ed.title}</span>
              <span style={{ marginLeft: 'auto' }} className="text-gray-500">{ed.duration}</span>
            </h3>
            <p className="text-gray-700 font-medium">
              {ed.univ}
            </p>

            {/* Show details only when expanded */}
            {expanded[index] && (
              
              <ul 
              style={{ marginLeft: '20px',marginTop:'20px' }}
              className="mt-5 ml-5 space-y-3 list-disc">
                <strong>{ed.courses}</strong>
                {ed.details.map((point, i) => (
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


const projectStyle = {
  backgroundColor: '#fff',
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  width: '95%',
};
