import React from 'react';
import backgroundImage from "../images/desk.jpeg"; // Import your background image

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "NETFLIX-CLONE",
    description: "A Netflix clone that I made using HTML & CSS.",
    url: "https://github.com/Tanvik01/NETFLIX-CLONE",
  },
];

const Portfolio = () => {
  return (
    <section
      className="padding"
      id="portfolio"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set background image here
        backgroundSize: 'cover',                     // Cover the whole section
        backgroundPosition: 'center',                // Center the image
        color: 'white',                              // Adjust text color for contrast
        padding: '3rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
      }}
    >
      <div style={{
        maxWidth: "40%",
        padding: "1rem",
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background for readability
        borderRadius: "8px",
        textAlign: "center",
      }}>
        <a href={projectList[0].url} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
          <h3>{projectList[0].title}</h3>
        </a>
        <p>{projectList[0].description}</p>
      </div>
    </section>
  );
};

export default Portfolio;

