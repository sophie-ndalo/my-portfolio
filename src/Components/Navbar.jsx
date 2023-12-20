import React from "react";
import { Link } from "react-scroll"; // Assuming you are using react-scroll

function Navbar() {
  return (
    <div>
      <nav className="border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="w-full md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
              <li className="mb-4">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-white rounded md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover-bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent"
                >
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-white rounded md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover-bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent"
                >
                  Work
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-white rounded md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover-bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent"
                >
                  Contact
                </Link>
              </li>
              {/* Resume link (external) */}
              <li>
                <a
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
                  href="https://drive.google.com/file/d/1KSZJUKWaZ5pTvwrmFBlCQZDtdFm27cgN/view?usp=drive_link"
                  className="block py-2 pl-3 pr-4 text-white rounded md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover-bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
