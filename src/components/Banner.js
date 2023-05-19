import React from "react";

function Banner() {
  return (
    <div className="flex flex-col items-center py-20 space-y-6">
      <div className="flex flex-col items-center space-y-4 pb-10">
        <p className="uppercase font-light tracking-widest">
          We enjoy meeting new people
        </p>
        <h3 className="text-5xl font-serif font-light text-center">
          Interested in working with us?
        </h3>
      </div>
      <a
        href="/about"
        class="rounded-md bg-indigo-600 px-6 py-4 uppercase text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Contact Us
      </a>
    </div>
  );
}

export default Banner;
