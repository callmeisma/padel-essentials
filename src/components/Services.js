import React from "react";
import Banner from "./Banner";

function Services() {
  return (
    <main className="flex flex-col">
      <h1 className="sr-only">Services</h1>
      <div
        className="h-96 flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),
                       rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1673266893352-6de89e258064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2066&q=80")`,
          backgroundPosition: "50% 50%",
        }}
      >
        <div class="md:w-4/6 md:mx-auto">
          <h1 class="text-white text-5xl font-serif font-light text-center leading-normal">
            <span className="font-bold">We guide you</span> on your
            <span className="font-bold"> Padel Journey!</span>
          </h1>
        </div>
      </div>

      <div className="px-6 py-10 space-y-4 md:w-4/6 md:mx-auto md:py-10">
        <p className="italic font-serif text-center pb-6">
          We are your one stop solution for opening your Padel Club.
        </p>
        <h2 className="text-4xl font-serif font-light">How We Work</h2>
        <p>
          If you're looking to open a Padel Club, it can be a daunting task.
          From finding the right location to designing the courts and purchasing
          equipment, there are many moving parts to consider. That's where we
          come in - our team of experts can guide you every step of the way and
          make the process as smooth as possible.
        </p>
        <p>
          We offer a comprehensive solution to help you launch your Padel Club,
          providing guidance on everything from market research and business
          planning to court design and construction. We'll help you ensure that
          the courts are built to the highest standards of quality and safety.
        </p>
        <p>
          In addition to court construction, we also offer a range of services
          to ensure that your club is successful in the long term. This includes
          marketing and branding services, equipment and supplies, and ongoing
          maintenance and support. We are committed to being your one-stop-shop
          for all things Padel and helping you achieve your goals in the
          industry.
        </p>
        <p>
          Overall, our mission is to be a trusted partner for Padel enthusiasts
          looking to start their own club. We are passionate about the sport and
          committed to helping our clients succeed in this exciting and growing
          industry. Let us guide you on your Padel journey and help you achieve
          your dreams!
        </p>
      </div>
      <ul className="flex flex-col items-start md:w-4/6 md:mx-auto md:px-6">
        <li className="flex flex-col justify-center md:flex-row">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1658491830143-72808ca237e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80"
              alt="Spinning Ball with water"
            ></img>
          </div>
          <div className="p-6 py-10 space-y-6 md:w-1/2 md:pt-24">
            <h3 className="font-serif text-3xl font-light">Padel Courts</h3>
            <p className="leading-relaxed">
              Serve up excellence with our court supplier services - we've got
              you covered from baseline to net!
            </p>
          </div>
        </li>
        <li className="flex flex-col justify-center md:flex-row-reverse">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1646649852033-7e0f3d679f8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
              alt="Spinning Ball with water"
            ></img>
          </div>
          <div className="p-6 py-10 space-y-6 md:w-1/2 md:pt-24">
            <h3 className="text-left font-serif text-3xl font-light md:text-right">
              Provide Padel Club Consulting
            </h3>
            <p className="text-left leading-relaxed md:text-right">
              Let our court builder consulting service ace your project with
              precision and expertise - we're your court-side partner from start
              to finish!
            </p>
          </div>
        </li>
        <li className="flex flex-col justify-center md:flex-row">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Spinning Ball with water"
            ></img>
          </div>
          <div className="p-6 py-10 pb-6 space-y-6 md:w-1/2 md:pt-24">
            <h3 className="font-serif text-3xl font-light">
              Setup Padel Store
            </h3>
            <p className="leading-relaxed">
              Partner with us to smash your retail goals and serve up success
              with our expert assistance in setting up your padel store!
            </p>
          </div>
        </li>
      </ul>
      <Banner />
    </main>
  );
}

export default Services;
