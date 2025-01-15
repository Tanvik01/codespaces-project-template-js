/**
 * Footer component
 *
 * Displays avenues to contact you.
 * Contact information is passed in from the App component that
 * renders the Footer.
 *
 * If a social value has an empty string it will not be displayed.
 */
import React from "react";
import PropTypes from "prop-types";

// Import your social icons
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import envelopeIcon from "../images/socials/envelope.svg";

const Footer = ({ email, gitHub, instagram, linkedIn }) => {
  return (
    <footer className="footer-container" style={{
      background: "linear-gradient(to right, rgba(0, 255, 149, 0.1), rgba(112, 0, 255, 0.1))",
      padding: "4rem 0",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Animated background elements */}
      <div className="footer-background">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="floating-circle"
            style={{
              position: "absolute",
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              background: `linear-gradient(45deg, ${index % 2 ? '#00ff95' : '#7000ff'}33, transparent)`,
              borderRadius: "50%",
              filter: "blur(40px)",
              animation: `float ${Math.random() * 5 + 5}s ease-in-out infinite`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              zIndex: 0
            }}
          />
        ))}
      </div>

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 2rem",
        position: "relative",
        zIndex: 1
      }}>
        {/* Social Links Section */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem"
        }}>
          <h2 style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            background: "linear-gradient(45deg, #00ff95, #7000ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Let's Connect</h2>

          <div style={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
            {gitHub && (
              <a
                href={gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.8rem 1.5rem",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "25px",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "all 0.3s ease"
                }}
              >
                <img src={gitHubIcon} alt="GitHub" style={{ width: "24px", height: "24px" }} />
                <span>GitHub</span>
              </a>
            )}

            {linkedIn && (
              <a
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.8rem 1.5rem",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "25px",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "all 0.3s ease"
                }}
              >
                <img src={linkedInIcon} alt="LinkedIn" style={{ width: "24px", height: "24px" }} />
                <span>LinkedIn</span>
              </a>
            )}

            {instagram && (
              <a
                href={`https://www.instagram.com/${instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.8rem 1.5rem",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "25px",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "all 0.3s ease"
                }}
              >
                <img src={instagramIcon} alt="Instagram" style={{ width: "24px", height: "24px" }} />
                <span>Instagram</span>
              </a>
            )}

            {email && (
              <a
                href={`mailto:${email}`}
                className="social-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.8rem 1.5rem",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "25px",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "all 0.3s ease"
                }}
              >
                <img src={envelopeIcon} alt="Email" style={{ width: "24px", height: "24px" }} />
                <span>Email</span>
              </a>
            )}
          </div>
        </div>

        {/* Copyright Section */}
        <div style={{
          marginTop: "4rem",
          textAlign: "center",
          color: "var(--text-secondary)",
          fontSize: "0.9rem"
        }}>
          <p>© 2024 Tanvi Kokitkar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
};

export default Footer;
