import React from 'react';
import { FaGithub, FaLinkedin, FaTwitterSquare, FaInstagram, FaEnvelope } from "react-icons/fa";


function Socialhandles() {
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-20 mr-40">

  <a href="https://github.com/sophie-ndalo" target="_blank" rel="noopener noreferrer"
    className="flex items-center py-1 px-2 rounded-lg text-blue-400 hover:bg-blue-100">
    <FaGithub className="mr-1 text-white" /> GitHub
  </a>

  <a href="https://www.linkedin.com/in/davin-ndalo-1b6057a4/" target="_blank" rel="noopener noreferrer"
    className="flex items-center py-1 px-2 rounded-lg text-blue-400 hover:bg-blue-100">
    <FaLinkedin className="mr-1 text-white" /> LinkedIn
  </a>

  <a href="https://twitter.com/yourtwitterusername" target="_blank" rel="noopener noreferrer"
    className="flex items-center py-1 px-2 rounded-lg text-blue-400 hover:bg-blue-100">
    <FaTwitterSquare className="mr-1 text-white" /> Twitter
  </a>

  <a href="https://www.instagram.com/yourinstagramusername" target="_blank" rel="noopener noreferrer"
    className="flex items-center py-1 px-2 rounded-lg text-blue-400 hover:bg-blue-100">
    <FaInstagram className="mr-1 text-white" /> Instagram
  </a>

  <a href="mailto:davinndalo@yahoo.com" target="_blank" rel="noopener noreferrer"
    className="flex items-center py-1 px-2 rounded-lg text-blue-400 hover:bg-blue-100">
    <FaEnvelope className="mr-1 text-white" /> Email
  </a>

</div>

  );
}

export default Socialhandles;
