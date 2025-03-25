'use client';  
import { useInView } from 'react-intersection-observer';

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,  
    threshold: 0.2,   
  });

  return (
    <section id="projects" ref={ref} style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s', marginTop:'20px', marginRight: '75px'}}>
      <h2>Projects</h2>
      <div style={projectContainerStyle}>
        <div style={projectStyle}>
          <h3>Food Freshness Detector </h3>
          <p style={descriptionStyle}>
            Developed a prototype using Raspberry Pi and biosensors (moisture, gas, pH) in C++ to detect food freshness, enhancing safety in food processing.
          </p>
          <div style={buttonContainerStyle}>
            <button>View Project</button>
          </div>
        </div>
        <div style={projectStyle}>
          <h3>Automatic detection of accidents under bad CCTV conditions</h3>
          <p style={descriptionStyle}>
            The project is about detecting accidents under bad CCTV monitoring conditions using Object detection and tracking system (OOTS) in combination with Deep-learning network.
          </p>
          <div style={buttonContainerStyle}>
            <button>View Project</button>
          </div>
        </div>
        <div style={projectStyle}>
          <h3>Foozyy meal-kits (FMK) </h3>
          <p style={descriptionStyle}>
            An initiative to introduce meal kit delivery service in Hyderabad, India. Over the course of six months, we have delivered 1950+ orders.
          </p>
          <div style={buttonContainerStyle}>
            <button>View Project</button>
          </div>
        </div>
      </div>
    </section>
  );
}

const projectContainerStyle = {
  display: 'flex',
  gap: '20px',
};


const projectStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  width: '33%',
  display: 'flex',
  flexDirection: 'column' as 'column', 
};


const descriptionStyle = {
  flexGrow: 1, // Pushes the button container to the bottom
};

const buttonContainerStyle = {
  marginTop: 'auto', // Ensures the button stays at the bottom
};
