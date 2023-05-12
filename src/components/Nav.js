import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="py-6 px-12 shadow-md">
      <ul className="list-none flex flex-col justify-center items-center space-y-4 md:space-y-0 md:flex-row">
        <li className="grow uppercase font-bold text-center sm:text-left">
          <Link to="/">Padel Essentials</Link>
        </li>
        <li>
          <ul className="flex justify-center items-center list-none space-x-6">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            {/* <li>
              <Link to="/courts">Courts</Link>
            </li> */}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
