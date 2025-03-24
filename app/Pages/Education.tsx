import { useInView } from 'react-intersection-observer';

export default function Education() {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Triggers the animation only once
    threshold: 0.2,     // Trigger when 20% of the element is visible
  });
    return (
      <section id="education" ref={ref} style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s' }}>
        <h2>Education</h2>
        <div style={projectContainerStyle}>
          <div style={projectStyle}>
            <h3>Master's degree</h3>
            <p>Univeristy of Cincinnati</p>
            <button>more details here</button>
          </div>
          <div style={projectStyle}>
          <h3>Bachelor's degree</h3>
            <p>BVRIT</p>
            <button>more details here</button>
          </div>
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
    width: '45%',
  };
  
  