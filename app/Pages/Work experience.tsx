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
      title: 'RPA Developer',
      duration: 'Jan 2024 - Present',
      company: 'State Street Corporation, Boston, USA',
      Courses: "Courses Taken:",
      details: [
        "Human Computer Interaction & Usability",
        "Technology for mobile Applications",
        "Machine learning and Data Mining",
        "Advnaced Algorithms",
        "Advanced Storage Technologies",
        "Princicples of Cybersecurity",
      ],
    },
  ];

  const workExperience1 = [
    {
      title: 'Application Developer',
      duration: 'Jan 2022 - Dec 2022',
      company: 'State Street Corporation, Hyderabad, India',
      details: [
        "The team comprises 15 members based in Hyderabad, Poland, and Boston, processing nearly 10 million RPA transactions per month. With over 150 bots operating 24/7, the automation framework leverages more than 500 worker nodes.",
        "The extensive codebase includes over 1,600 bots, ensuring seamless automation across Blue Prism's and UI Path’s environments to meet automation targets efficiently.",
        "Automated end-to-end processes in collaboration with business stakeholders, delivering cost savings through efficient workflow design.",
        "Developed and maintained reusable components in Blue Prism Object Studio, streamlining interactions with various applications and enhancing automation reusability.",
        "Managed, deployed, and monitored bots in UiPath Orchestrator, ensuring smooth execution, scheduling, and centralized control of automated processes.",
        "Enhanced bot stability by implementing robust error-handling mechanisms and scheduling optimizations for seamless execution in production.",
        "Leveraged Splunk to monitor bot performance, analyze logs, and troubleshoot issues, enabling faster incident resolution.",
        "Managed project tasks and tracked progress using JIRA, ensuring timely completion of development cycles and incident resolutions.",
        "Integrated RPA solutions with AWS RDS for optimized database interactions, improving query performance and reducing downtime.",
        "Managed AWS infrastructure using automated provisioning scripts, ensuring consistent deployment and improved system reliability.",
        "Coordinated release management activities, including deployments to INT, UAT, and PROD environments, ensuring smooth transitions with minimal disruptions.",
        "Designed robust alerting mechanisms using Splunk dashboards, providing proactive notifications for anomalies and failures in RPA workflows.",
      ],
      tech: "Blue Prism, UiPath, Splunk, JIRA, AWS (EC2, S3, RDS), Git, PowerShell, Python, SQL Server, PostgreSQL, Jenkins.",
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
        style={projectContainerStyle}
        className="flex flex-col gap-6">
        {[...workExperience, ...workExperience1].map((job, index) => (
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
              <strong>{job.company}</strong>
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
                <ul 
                style={{ marginTop: '10px' }} 
                className="mt-3 text-gray-600"><strong>Technologies: </strong>{job.tech}</ul>
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
