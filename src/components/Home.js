import React from "react";
import { Link } from "react-router-dom";
import CallToAction from "./CallToAction";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <main>
      <Helmet>
        <title>Padel Essentials</title>
        <meta
          name="description"
          content="Your one-stop shop for all things Padel! With extensive experience in opening and managing successful clubs, we are the ideal partners for your Padel Club venture."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <h1 className="sr-only">
        Padel Essentials. Your one-stop shop for all things Padel!
      </h1>
      <div
        className="banner-wrapper"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),
                       rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1661881545067-b15c94c6b7cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80")`,
        }}
      >
        <div class="banner-content">
          <div className="space-y-2">
            <p class="text-center font-rhodium text-5xl font-bold uppercase tracking-wide text-white md:text-7xl">
              Padel Essentials
            </p>
            <p class="mx-auto w-4/5 text-center text-4xl font-thin tracking-wide text-white md:w-full">
              your
              <span className="font-bold italic"> one-stop shop</span> for all
              things
              <span className="font-bold italic"> Padel!</span>
            </p>
          </div>
          <div class="flex items-center justify-center gap-x-6">
            <Link to="/services" className="btn-primary">
              Learn More
            </Link>
            <Link
              to="/about"
              className="text-sm font-semibold leading-6 text-white"
            >
              Who we are <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="billboard-wrapper">
        <p className="billboard">
          With our extensive experience in opening and managing over a dozen
          successful clubs, we are the ideal mentors and consultants for your
          new Padel Club venture.
        </p>
      </div>
      <div className="flex flex-col space-y-12 bg-sky-700 py-16">
        <h2 className="pb-4 text-center text-5xl tracking-wide text-white">
          Our Services
        </h2>
        <ul className="flex flex-col space-x-0 space-y-6 text-white md:flex-row md:space-x-6 md:space-y-0 md:px-12 lg:px-28">
          <li className="card">
            <div className="card-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1658491830143-72808ca237e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80"
                alt="Padel Court Net"
                className="card-image"
                loading="lazy"
                title="Padel Court Net"
                width="400"
                height="auto"
              ></img>
            </div>
            <div className="card-contents">
              <h3 className="card-title">Courts</h3>
              <p className="card-desc">
                Serve up excellence with our court supplier services - we've got
                you covered from baseline to net!
              </p>
            </div>
          </li>
          <li className="card">
            <div className="card-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1646649852033-7e0f3d679f8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                alt="Two Padel Players about to shake hands"
                className="card-image"
                loading="lazy"
                title="Padel Players"
                width="400"
                height="auto"
              ></img>
            </div>
            <div className="card-contents">
              <h3 className="card-title">Consulting</h3>
              <p className="card-desc">
                Let our court builder consulting service ace your project with
                precision and expertise - we're your court-side partner from
                start to finish!
              </p>
            </div>
          </li>
          <li className="card">
            <div className="card-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Open Sign on Shop Door"
                className="card-image"
                loading="lazy"
                title="Open Shop"
                width="400"
                height="auto"
              ></img>
            </div>
            <div className="card-contents">
              <h3 className="card-title">Store</h3>
              <p className="card-desc">
                Partner with us to smash your retail goals and serve up success
                with our expert assistance in setting up your padel store!
              </p>
            </div>
          </li>
        </ul>
        <div class="flex items-center justify-center">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
      <div className="billboard-wrapper">
        <p className="billboard">
          Building a thriving Padel Club involves multiple aspects, and we have
          the expertise to guide you through each step of the process.We provide
          comprehensive support to ensure your club's success.
        </p>
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="flex items-center justify-center overflow-hidden lg:w-1/2">
          <img
            src="
        https://images.unsplash.com/photo-1673266893877-f31c1583aad3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80"
            alt="Padel Courts Overhead"
            className="min-h-full	min-w-full shrink-0	object-cover"
            loading="lazy"
            title="Padel Courts Overhead"
            width="700"
            height="auto"
          ></img>
        </div>
        <div className="flex items-center justify-center overflow-hidden lg:w-1/2">
          <img
            src="
        https://images.unsplash.com/photo-1673266893744-17a8cc6518fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80"
            alt="Padel Courts Overhead Angled"
            className="min-h-full	min-w-full shrink-0	object-cover"
            loading="lazy"
            title="Padel Courts Overhead Angled"
            width="700"
            height="auto"
          ></img>
        </div>
      </div>
      <CallToAction />
    </main>
  );
}

export default Home;
