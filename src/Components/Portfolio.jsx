import React, { useState } from "react";
import image from "../images/desk.jpeg";

/**
 * Project list
 */
const projectList = [
  {
    title: "Movie Recommendation System",
    description: "Built with JavaScript, HTML, CSS, TMDB API, and Python. Features include dataset integration from Kaggle, comprehensive movie details via TMDB API, dynamic search functionality, and interactive features like 'Know More' buttons linking to trailers. Deployed on Netlify for seamless accessibility.",
    url: "https://madsreccoms.netlify.app/",
  },
  {
    title: "Personal Portfolio",
    description: "A dynamic and responsive portfolio website using React.js featuring interactive design, modern UI/UX, project showcase sections, and performance optimizations. Built with React.js, focusing on smooth navigation and responsive layouts.",
    url: "https://github.com/Tanvik01",
  },
  {
    title: "Coffee Shop Website",
    description: "An interactive coffee shop website featuring add-to-cart functionality, interactive map integration, and modern UI/UX design. Built with JavaScript, CSS, and HTML, ensuring responsive design across all devices.",
    url: "#",
    status: "Coming Soon"
  }
];

// Toast component
const Toast = ({ message, onClose }) => (
  <>
    {/* Overlay */}
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(5px)',
        zIndex: 9998
      }}
      onClick={onClose}
    />
    {/* Toast */}
    <div 
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
        color: 'white',
        padding: '1.5rem 3rem',
        borderRadius: '15px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
        zIndex: 9999,
        animation: 'fadeIn 0.3s ease-out',
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        minWidth: '200px',
        justifyContent: 'center'
      }}
    >
      <span style={{ 
        fontWeight: '500',
        fontSize: '1.2rem'
      }}>{message}</span>
      <button 
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
          background: 'none',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          fontSize: '1.2rem',
          padding: '0.2rem',
          opacity: '0.8',
          transition: 'opacity 0.3s ease',
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
      >
        ×
      </button>
    </div>
  </>
);

const Portfolio = () => {
  const [showToast, setShowToast] = useState(false);

  const handlePortfolioClick = (e, project) => {
    if (project.title === "Personal Portfolio") {
      e.preventDefault();
      e.stopPropagation();
      setShowToast(true);
      console.log("Portfolio clicked, showing toast");
      setTimeout(() => {
        setShowToast(false);
        console.log("Toast hidden");
      }, 3000);
    }
  };

  const handleComingSoonClick = (e) => {
    e.preventDefault();
    const button = e.currentTarget;
    button.style.animation = 'wobble 0.5s ease';
    
    // Remove animation after it completes to allow it to be triggered again
    setTimeout(() => {
      button.style.animation = '';
    }, 500);
  };

  return (
    <section className="padding" id="portfolio">
      {showToast && (
        <Toast 
          message="You're already here! 😊" 
          onClose={() => setShowToast(false)} 
        />
      )}
      <div className="portfolio-container" style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem"
      }}>
        <h2 style={{
          textAlign: "center",
          marginBottom: "3rem",
          fontSize: "2.5rem"
        }}>My Projects</h2>
        
        <div className="portfolio-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem"
        }}>
          {projectList.map((project, index) => (
            <div key={index} className="portfolio-item" style={{
              background: "var(--card-bg)",
              padding: "1.5rem",
              borderRadius: "15px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
            }}>
              <h3 style={{ 
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                {project.title}
                {project.status && (
                  <span style={{
                    fontSize: "0.8rem",
                    padding: "0.3rem 0.8rem",
                    background: "linear-gradient(45deg, var(--primary-color), var(--secondary-color))",
                    borderRadius: "15px",
                    color: "white"
                  }}>
                    {project.status}
                  </span>
                )}
              </h3>
              <p style={{ marginBottom: "1.5rem" }}>{project.description}</p>
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => project.status ? handleComingSoonClick(e) : handlePortfolioClick(e, project)}
                style={{
                  display: "inline-block",
                  padding: "0.8rem 1.5rem",
                  background: project.status 
                    ? "linear-gradient(45deg, #808080, #404040)" // Dimmed colors for Coming Soon
                    : "linear-gradient(45deg, #00ff95, #7000ff)",
                  color: "white",
                  borderRadius: "25px",
                  transition: "all 0.3s ease",
                  border: "none",
                  boxShadow: project.status 
                    ? "0 0 20px rgba(128, 128, 128, 0.3)"
                    : "0 0 20px rgba(0, 255, 149, 0.3)",
                  cursor: project.status ? "not-allowed" : "pointer",
                  opacity: project.status ? "0.7" : "1"
                }}
                onMouseEnter={(e) => {
                  if (!project.status) {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 0 30px rgba(0, 255, 149, 0.5)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!project.status) {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 255, 149, 0.3)";
                  }
                }}
              >
                {project.status ? "Coming Soon" : "View Project"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

