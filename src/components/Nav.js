import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="px-12 py-6 shadow-md">
      <ul className="flex list-none flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0">
        <li className="grow text-center font-bold uppercase sm:text-left">
          <Link to="/">Padel Essentials</Link>
        </li>
        <li>
          <ul className="flex list-none items-center justify-center space-x-6">
            <li>
              <Link to="/" className="hover:text-sky-700 focus:text-sky-700">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-sky-700 focus:text-sky-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-sky-700 focus:text-sky-700"
              >
                Services
              </Link>
            </li>
            {/* <li>
              <Link to="/courts">Courts</Link>
            </li> */}
            <li>
              <Link
                to="/contact"
                className="hover:text-sky-700 focus:text-sky-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
