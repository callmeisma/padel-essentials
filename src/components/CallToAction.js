import React from "react";

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
      <a href="/about" class="btn-primary">
        Contact Us
      </a>
    </div>
  );
}

export default Banner;
