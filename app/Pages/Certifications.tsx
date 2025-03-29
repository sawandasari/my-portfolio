'use client';  

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface Certificate {
  title: string;
  description: string;
  link: string;
}

export default function Certifications() {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Triggers the animation only once
    threshold: 0.2,     // Trigger when 20% of the element is visible
  });

  // State to track which certificate to show
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  // Certificates Data
  const certificates = [
    {
      title: 'Blue Prism Certified Associate Developer(ASDEV01)',
      description: 'I have passed the Associate Developer Exam and proven my understanding of the essential skills and knowledge required to configure a simple Blue Prism process automation solution.',
      link: 'https://www.credly.com/badges/a529a4d0-5d42-4f06-a053-5b9d47018021/linked_in?t=sp0eak',
    },
    {
      title: 'SS&C Blue Prism Customer Excellence Awards 2024 Winner | Operational Ingenuity',
      description: 'This award celebrates customers who have built a solid framework and delivery methodology to achieve IA success.',
      link: 'https://www.credly.com/badges/c5e89b61-3312-40f1-9fb7-a90d01aefdd6/linked_in?t=sdy61k', 
    },
    {
      title: 'Programming essentials in Python by Hackerrank',
      description: 'It covers topics like Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes.',
      link: 'https://www.hackerrank.com/certificates/e20ff43ab76b',
    },
  ];

  // Function to handle showing certificate
  const handleViewClick = (index: number) => {
    setSelectedCertificate(certificates[index]);
  };

  // Function to handle closing certificate details
  const handleCloseClick = () => {
    setSelectedCertificate(null);
  };

  return (
    <section 
      id="certifications"
      ref={ref}
      style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s', marginTop: '20px', marginRight: '75px'}}
    >
      <h2 className='text-2xl font-bold mb-6'> Certifications</h2>
      <div style={projectContainerStyle}>
        {certificates.map((certificate, index) => (
          <div key={index} style={projectStyle}>
            <h3>{certificate.title}</h3>
            <button onClick={() => handleViewClick(index)}> More </button>
          </div>
        ))}
      </div>

      {/* Display the selected certificate when clicked */}
      {selectedCertificate && (
        <div style={certificateDetailsStyle}>
          <h3>{selectedCertificate.title}</h3>
          <p>{selectedCertificate.description}</p>
          <br/>
          <a href={selectedCertificate.link} target="_blank" rel="noopener noreferrer">
            <button>View Certificate</button>
          </a>
          <button onClick={handleCloseClick}style={{marginLeft: '10px'}}  >Close</button>
        </div>
      )}
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
  width: '45%',
};

const certificateDetailsStyle: React.CSSProperties  = {
  marginTop: '20px',
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  position: 'relative',
};
/*
const closeButtonStyle = {
  marginTop: '10px',
  marginLeft: '10px',
  padding: '10px 20px',
  backgroundColor: '#f77878',
  color: 'black',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
}; */

