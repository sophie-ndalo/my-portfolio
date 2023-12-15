import React from 'react';
import { FaGithub, FaLinkedin, FaTwitterSquare, FaInstagram, FaEnvelope } from "react-icons/fa";

function Socialhandles() {
  return (
    <div className="social-links" style={{ marginLeft: "200px",marginTop: "20px", display: "flex" }}>
      <a href="https://github.com/sophie-ndalo" target="_blank" rel="noopener noreferrer">
        <FaGithub style={{ color: "white" }} /> GitHub
      </a>
      <a href="https://www.linkedin.com/in/davin-ndalo-1b6057a4/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin style={{ color: "white" }} /> LinkedIn
      </a>
      <a href="https://twitter.com/yourtwitterusername" target="_blank" rel="noopener noreferrer">
        <FaTwitterSquare style={{ color: "white" }} /> Twitter
      </a>
      <a href="https://www.instagram.com/yourinstagramusername" target="_blank" rel="noopener noreferrer">
        <FaInstagram style={{ color: "white" }} /> Instagram
      </a>
      <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope style={{ color: "white" }} /> Email
      </a>
    </div>
  );
}

export default Socialhandles;
