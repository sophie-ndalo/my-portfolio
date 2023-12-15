import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import Socialhandles from "./Socialhandles";
import Work from "./Work";
import Contact from "./Contact";
import { Element } from "react-scroll";

function Home() {
  return (
    <div className="bg-black">

<Element name="navbar">
  <div>
    {/* Content of your navbar section */}
    <Navbar/>
  </div>
</Element>
      <Element name="about">
        <div>
          {/* Content of your About section */}
          <About />
        </div>
      </Element>

      <Element name="work">
        <div>
          {/* Content of your Work section */}
          <Work />
        </div>
      </Element>

      <Element name="contact">
        <div>
          {/* Content of your contact section */}
          <Contact />
        </div>
      </Element>

      <Element name="socialhandles">
        <div>
          {/* Content of your socialhandles section */}
          <Socialhandles />
        </div>
      </Element>
    </div>
  );
}

export default Home;
