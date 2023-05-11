import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="py-6 px-12 shadow-md">
      <ul className="flex list-none space-x-12">
        <li className="grow uppercase font-bold">
          <Link to="/">Padel Essentials</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/courts">Courts</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
