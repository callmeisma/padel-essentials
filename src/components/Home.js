import React from "react";

function Home() {
  return (
    <main
      className="bg-cover bg-left-top"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),
                       rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1661881545067-b15c94c6b7cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80")`,
      }}
    >
      <div class="flex flex-col items-center justify-center px-6 py-20 space-y-10 md:w-3/4 md:mx-auto md:py-48">
        <h1 class="text-white text-5xl text-center tracking-wide md:text-4xl">
          We are your<span className="font-bold italic"> one-stop</span> shop
          for all things
          <span className="font-bold italic"> Padel!</span>
        </h1>
        <p class="text-center text-white text-lg leading-8">
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
    </main>
  );
}

export default Home;
