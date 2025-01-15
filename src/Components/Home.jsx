/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 */
import image from "../images/home_bg.jpg";

const imageAltText = "Modern abstract background";

const Home = ({ name, title }) => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-height">
      <img 
        className="background" 
        src={image} 
        alt={imageAltText}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          filter: "brightness(0.8)"
        }}
      />
      <div style={{ 
        position: "absolute", 
        top: "5rem", 
        left: "2rem", 
        width: "17rem",
        zIndex: 1
      }}>
        <h1 style={{ 
          color: "#000000",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
          fontSize: "7rem",
          fontWeight: "400"
        }}>{name}</h1>
        <h2 style={{ 
          color: "#000000",
          fontSize: "2rem",
          fontWeight: "400",
          marginTop: "1rem"
        }}>{title}</h2>
      </div>
      <div 
        onClick={scrollToNextSection}
        style={{ 
          position: "absolute", 
          bottom: "3rem", 
          left: "50%",
          transform: "translateX(-50%)",
          animation: "bounce 2s infinite",
          cursor: "pointer"
        }}
      >
        <img 
          src={arrowSvg} 
          style={{ 
            height: "3rem", 
            width: "3rem",
            filter: "invert(1)",
            opacity: "0.8"
          }} 
          alt="Scroll down" 
        />
      </div>
    </section>
  );
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
