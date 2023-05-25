import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="flex flex-col items-center space-y-6 py-20">
      <div className="flex flex-col items-center space-y-4 pb-10">
        <p className="font-light uppercase tracking-widest">
          Join the Padel fever
        </p>
        <h3 className="text-center font-serif text-5xl font-light">
          Ready to start your <span className="font-semibold">Padel Club</span>?
        </h3>
      </div>
      <Link to="/contact" className="btn-primary">
        Contact Us
      </Link>
    </div>
  );
}

export default Banner;
