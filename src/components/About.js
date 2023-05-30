import React from "react";
import { Link } from "react-router-dom";
import CallToAction from "./CallToAction";
import { Helmet } from "react-helmet-async";

function About() {
  return (
    <main className="">
      <Helmet>
        <title>About Test</title>
        <meta name="description" content="Descirption for about section" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div
        className="banner-wrapper"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),
                       rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1651140753772-c12fdcd7077d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80")`,
          backgroundPosition: "0% 0%",
        }}
      >
        <div class="banner-content">
          <h1 class="banner-title">
            <span className="font-bold">Cutting-edge</span> courts with
            <span className="font-bold"> state-of-the-art</span> equipment.
          </h1>
        </div>
      </div>
      <h1 className="sr-only">About Us</h1>
      <div className="space-y-4 px-6 pb-10 pt-20 md:mx-auto md:w-4/6">
        <h2 className="font-serif text-4xl font-light">Who we are</h2>
        <p>
          We are the ultimate destination for all your Padel Club needs! Our
          expert team is here to guide you through the process of setting up
          your own Padel Club, offering guidance on everything from selecting
          the right courts to managing your business succesfully.Our selection
          of courts have international certifications and are sold by the
          biggest brands in the Business.
        </p>
        <p>
          Alongside our Padel Club Consulting services, we also specialize in
          establishing your very own Padel Shop. Our extensive collection of
          Padel products are from all the top Padel Brands, making it easy for
          you clients to find everything they need to play the game they love
          while increasing your profits! From rackets to balls, shoes to
          accessories, we offer a comprehensive range of products to satisfy all
          your clients needs.
        </p>
        <p>
          We are committed to providing you high quality products with
          unbeatable prices and the best possible support, so you can focus on
          enjoying the game and growing your business!
        </p>
      </div>
      <div className="billboard-wrapper">
        <p className="billboard">
          Our goal is to assist you in creating a profitable and thriving Padel
          Club by capitalizing on the revenue-generating potential of a
          well-designed pro shop.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 px-6 pb-10 md:mx-auto md:w-4/6">
        <h2 className="pb-6 font-serif text-4xl font-light md:pb-10 md:pt-4">
          Distinctive experience,
          <span className="italic"> stricking products</span>
        </h2>
        <div className="flex flex-col justify-evenly space-y-4 md:flex-row md:space-x-20 md:space-y-0">
          <div className="space-y-4 md:w-1/2">
            <p>
              We are Padel Club experts! We have pioneered the Padel fever in
              Bolivia, where we have opened 4 profitable clubs and are currently
              in the process of building 5 more clubs.
            </p>
            <p>
              Our success in Bolivia has led us to expand our business to
              Colombia and Chile, where we have already opened two Padel Club
              facilities and have five more under development.
            </p>
            <p>
              Our experience in the industry and track record of success make us
              well-equipped to continue providing top-notch Padel Club
              facilities and products as we expand to the US market.
            </p>
          </div>
          <div className="space-y-4 md:w-1/2">
            <p>
              At our Padel Clubs, you can expect to find state-of-the-art
              courts, top-quality equipment, a pro-shop, a coffee shop and the
              best systems and management to be able to provide an exceptional
              experience. Come join the Padel fever and see why we are the Padel
              Club experts!
            </p>
            <div class="flex items-center justify-center py-6 md:py-12">
              <Link to="/services" className="btn-primary">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div
          className="h-96"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),
                       rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1587280501635-a19de238a81e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80")`,
            backgroundPosition: "50% 46%",
          }}
        ></div>
      </div>
      <CallToAction />
    </main>
  );
}

export default About;
