import React from "react";

function Home() {
  return (
    <div
      className="bg-right-bottom"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),
                       rgba(0, 0, 0, 0.5)), url("https://img.freepik.com/free-photo/tennis-paddles-balls-arrangement_23-2149434236.jpg?w=1800&t=st=1683829937~exp=1683830537~hmac=7264604d2369d3b08399197f216482e20eca75aac9cf4dfb2b01320521145da6")`,
      }}
    >
      <div class="w-1/2 mx-auto py-48 flex flex-col items-center">
        <h1 class="text-white text-4xl text-center tracking-tight text-gray-900 sm:text-6xl">
          We are your<span className="font-bold italic"> one-stop</span> shop
          for all things
          <span className="font-bold italic"> Padel!</span>
        </h1>
        <p class="text-white py-6 text-lg leading-8 text-gray-600 text-center">
          We specialize in providing a comprehensive range of Padel products
          from the top Padel brands, making it easy for you to find everything
          you need to play the game you love.
        </p>
        <div class="flex items-center justify-center gap-x-6">
          <a
            href="/about"
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Who we are
          </a>
          <a
            href="/services"
            class="text-sm text-white font-semibold leading-6 text-gray-900"
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
