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
      title: 'Application Developer',
      duration: 'Jan 2024 - Present',
      company: 'State Street Corporation, Boston, USA',
      details: [
        "Developed and maintained web applications using ASP.NET, C#, MVC, and Web API, handling end-to-end software development for applications serving 1000+ users across multiple departments.",
        "Designed and optimized relational database structures in Azure and My SQL Server, developing 50+ stored procedures, triggers, and functions to implement complex business logic.",
        "Integrated web services REST APIs for data exchange between enterprise applications, ensuring secure and seamless communication between 5+ business-critical systems.",
        "Enhanced front-end functionality with JavaScript, jQuery, and ReactJS, improving UI performance and user experience for enterprise applications used by 500+ employees.",
        "Led deployment and troubleshooting of applications in a 5-member Agile development team, implementing CI/CD pipelines for faster and more reliable software releases.",
        "Built and deployed containerized microservices using Docker, improving application portability and scalability in cloud environments.",
        "Developed and optimized database interactions in PostgreSQL, designing efficient indexing strategies to improve query performance.",
        "Wrote ad-hoc queries and custom reports for data analysis, supporting key business decisions by extracting insights from millions of records.",
        "Authored technical documentation, including user guides, IT knowledge base articles, and API reference manuals, improving onboarding and system maintenance processes.",
        "Collaborated with cross-functional teams including business analysts, QA testers, and project managers to ensure project deliverables align with business requirements, successfully completing 95% of projects on time.",
        "Coordinated release management activities, including deployments to INT, UAT, and PROD environments, ensuring smooth transitions with minimal disruptions.",
      ],
      tech: "ASP.NET, C#, MVC, Web API, Azure, MySQL Server, REST APIs, JavaScript, Typescript, PHP, jQuery, ReactJS, CI/CD, Docker, PostgreSQL, Technical Documentation.",
    },
  ];

  const workExperience1 = [
    {
      title: 'Application Developer, Assocaite 2',
      duration: 'Jan 2022 - Dec 2022',
      company: 'State Street Corporation, Hyderabad, India',
      details: [
        "Developed the monolithic architecture using the Spring MVC framework and implemented Spring dependency injection for database helper instances, leveraging Spring IOC to resolve dependency injection issues.",
        "Configured Dispatcher Servlet and View Resolver to intercept incoming requests, manage Spring MVC flow, and invoke view components efficiently.",
        "Designed and built RESTful APIs using Node.js and Spring Boot to provide secure access to financial data, enabling internal and external stakeholders to access real-time information efficiently while maintaining security and compliance standards.",
        "Implemented performance tuning strategies, including indexing and caching mechanisms in Apache Traffic Server, resulting in a 30% reduction in query execution time.",
        "Utilized Apache Storm for real-time data processing, enhancing the organization's ability to respond to dynamic data needs.",
        "Developed and optimized ReactJS components for dynamic front-end applications, improving user experience through state management, virtual DOM, and reusable UI components.",
        "Responsible for configuring and securing the infrastructure on Microsoft Azure Cloud, provisioning Azure resources such as Virtual Machines (VMs), Virtual Networks (VNet), Managed Disks, Blob Storage, configuring subnets, and handling other operational tasks.",
        "Managed project tasks and tracked progress using JIRA, ensuring timely completion of development cycles and incident resolutions.",
        "Built microservices-based architectures using Spring Boot, enabling modular and scalable applications with independent service deployment and management.",
        "Managed AWS infrastructure using automated provisioning scripts, ensuring consistent deployment and improved system reliability.",
        "Utilized NUnit and Mockito for unit testing, automated UI web elements using Selenium locator techniques, and ensured robust test coverage.",
      ],
      tech: "Spring MVC, Spring IOC, RESTful APIs, Node.js, Spring Boot, Apache Traffic Server, Apache Storm, ReactJS, Virtual DOM, Microsoft Azure, Azure Virtual Machines (VMs), Azure Virtual Networks (VNet), Azure Blob Storage, Microservices, NUnit, Mockito, Selenium.",
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
