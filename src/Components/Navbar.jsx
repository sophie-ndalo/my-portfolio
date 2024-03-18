import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Rename Link to ScrollLink
import { Link } from "react-router-dom"; // Rename Link to RouterLink
import Work from "./Work";

function Navbar() {
  return (
    <div>
      <nav className="border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="w-full md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
              <li className="mb-4">
                <ScrollLink // Using ScrollLink for scroll-based navigation
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-white rounded md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover-bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent"
                >
                  About
                </ScrollLink>
              </li>
              <li className="mb-4">
                <Link
                  to="/work" // Define the route path to your Work component
                  className="block py-2 pl-3 pr-4 text-white rounded md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover-bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent"
                >
                  projects
                </Link>
              </li>
              <li className="mb-4">
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-white rounded md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover-bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent"
                >
                  Contact
                </ScrollLink>
              </li>
              {/* Resume link (external) */}
              {/* <li>
                <RouterLink // Using RouterLink for MyCv component
                  to="/mycv"
                  style={{
                    width: "85px",
                    height: "40px",
                    borderRadius: "5px",
                    borderColor: "#87CEEB",
                    borderWidth: "2px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    marginTop: "-5px",
                  }}
                  className="block py-2 pl-3 pr-4 text-white rounded md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover-bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent"
                >
                  Resume
                </RouterLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
