import React from "react";

function About() {
  return (
    <div>
      <div style={{ marginLeft: "200px", marginTop: "100px", fontFamily: "'Roboto Slab', serif" }}>
        <p style={{ color: "#87CEEB" }}>Hi, my name is</p>
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">Ndalo Sophia.</h1>
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">I build things for the web.</h1>
        <div className="w-full md:w-2/3 lg:w-1/2 mt-6">
          <p className="text-white text-lg">
            Welcome to my portfolio! I'm an aspiring web developer with a passion for crafting digital solutions and a strong interest in AI. While I may be new to web development, my projects reflect my dedication to learning and growing in this field. I'm also on an exciting journey in Python, with the aim of venturing into the world of AI. My projects serve as a testament to my evolving skills as a developer and my commitment to continuous learning. Explore my work, where I've embraced coding challenges and ventured into front-end and back-end development. These projects are my canvas for creative expression and an opportunity to showcase my evolving skills as a developer.
          </p>
        </div>
        <a href="mailto:davinndalo@yahoo.com">
          <button
            style={{
              color: "white",
              width: "105px",
              height: "40px",
              borderRadius: "5px",
              borderColor: "#87CEEB",
              borderWidth: "2px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
              marginTop: "50px",
            }}
          >
            Get in touch
          </button>
        </a>
      </div>
    </div>
  );
}

export default About;
