/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/about_bg.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Btech Student studying at Bharati Vidyapeeth. I enjoy creating unique and simplistic websites in creative ways.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "HTML",
  "CSS",
  "Javascript",
  "Java",
  "React",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my front end experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section id="about" className="about-section padding">
      <div className="about-container" style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "4rem 2rem",
        position: "relative"
      }}>
        {/* Floating cards design */}
        <div className="about-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center"
        }}>
          {/* Left side - About Me */}
          <div className="about-content" style={{
            position: "relative",
            zIndex: 1
          }}>
            <h2 style={{
              fontSize: "2.5rem",
              marginBottom: "2rem",
              background: "linear-gradient(45deg, #00ff95, #7000ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>About Me</h2>
            
            <p style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              marginBottom: "2rem",
              color: "#000000"
            }}>
              I'm a Btech Student studying at Bharati Vidyapeeth. I enjoy creating unique and 
              simplistic websites in creative ways.
            </p>

            <p style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              marginBottom: "2rem",
              color: "#000000"
            }}>
              I am passionate about solving problems in new creative ways to drive innovation. 
              By leveraging my front end experience I continually look for new and better ways 
              to make tech accessible by all.
            </p>
          </div>

          {/* Right side - Skills */}
          <div className="skills-container" style={{
            background: "rgba(21, 21, 21, 0.7)",
            borderRadius: "20px",
            padding: "2rem",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}>
            <h3 style={{
              fontSize: "1.8rem",
              marginBottom: "1.5rem",
              color: "#ffffff"
            }}>Skills & Technologies</h3>

            <div className="skills-grid" style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1rem"
            }}>
              {skillsList.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item"
                  style={{
                    padding: "1rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "15px",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                    textAlign: "center",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "#ffffff"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "0",
          width: "200px",
          height: "200px",
          background: "linear-gradient(45deg, #00ff9533, #7000ff33)",
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: 0
        }} />
        
        <div style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "150px",
          height: "150px",
          background: "linear-gradient(45deg, #7000ff33, #00ff9533)",
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: 0
        }} />
      </div>
    </section>
  );
};

export default About;
