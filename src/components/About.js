import React from "react";

function About() {
  return (
    <div className="">
      <div
        className="h-96"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),
                       rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1651140753772-c12fdcd7077d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80")`,
          backgroundPosition: "0% 15%",
        }}
      ></div>
      <h1 className="sr-only">About Us</h1>
      <div className="w-4/5 mx-auto p-6 space-y-2">
        <h2 className="text-center">Who we are</h2>
        <p>
          We are your one-stop-shop for all things Padel! We specialize in
          providing a comprehensive range of Padel products from the top Padel
          brands, making it easy for you to find everything you need to play the
          game you love. Whether you're looking for rackets, balls, shoes, or
          other accessories, we've got you covered.
        </p>
        <p>
          In addition to selling Padel products, we also offer a unique service
          for those interested in opening and managing a Padel Club. Our expert
          team is here to guide you through the process of setting up your own
          Padel Club, from providing right courts to managing your business
          successfully. Our selection of courts have international
          certifications and are sold by the biggest brands in the Business.
        </p>
        <p>
          We are committed to providing you high quality products with
          unbeatable prices and the best possible support, so you can focus on
          enjoying the game and growing your business!
        </p>
      </div>
      <div className="p-6 space-y-2 flex justify-center items-center">
        <div className="w-1/2 px-6">
          <h2>Our experience</h2>
          <p>
            We are Padel Club experts! We have pioneered the Padel fever in
            Bolivia, where we have opened 4 profitable clubs and are currently
            in the process of building 5 more clubs.
          </p>
          <p>
            Our success in Bolivia has led us to expand our business to Colombia
            and Chile, where we have already opened two Padel Club facilities
            and have five more under development. Our experience in the industry
            and track record of success make us well-equipped to continue
            providing top-notch Padel Club facilities and products as we expand
            to the US market.
          </p>
          <p>
            At our Padel Clubs, you can expect to find state-of-the-art courts,
            top-quality equipment, a pro-shop, a coffee shop and the best
            systems and management to be able to provide an exceptional
            experience. Come join the Padel fever and see why we are the Padel
            Club experts!
          </p>
        </div>
        <div className="w-2/6">
          <img
            src="https://images.unsplash.com/photo-1587280501635-a19de238a81e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Spinning Ball with water"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default About;
