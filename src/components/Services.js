import { React, useEffect } from "react";
// import { Link } from "react-router-dom";
import CallToAction from "./CallToAction";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex flex-col">
      <h1 className="sr-only">Services</h1>
      <div
        className="banner-wrapper"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),
                       rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1673266893352-6de89e258064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2066&q=80")`,
          backgroundPosition: "50% 50%",
        }}
      >
        <div class="banner-content">
          <h1 class="banner-title">
            <span className="font-bold">We guide you</span> on your
            <span className="font-bold"> Padel Journey!</span>
          </h1>
        </div>
      </div>
      <div className="space-y-4 px-6 pb-10 pt-20 md:mx-auto md:w-4/6">
        <h2 className="font-serif text-4xl font-light">How We Work</h2>
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
        <div className="billboard-wrapper">
          <p className="billboard">
            We are your <span class="font-bold">one stop solution </span>one
            stop solution for opening your Padel Club.
          </p>
        </div>
      </div>
      <ul className="flex flex-col items-start space-y-6 md:mx-auto md:w-4/6 lg:space-y-0">
        <li className="items-top flex flex-col justify-center lg:flex-row">
          <div className="flex items-center justify-center overflow-hidden lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1658491830143-72808ca237e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80"
              alt="Spinning Ball with water"
              className="min-h-full	min-w-full shrink-0	object-cover"
            ></img>
          </div>
          <div className="space-y-6 p-6 py-10 md:px-0 lg:w-1/2 lg:pl-6 lg:pt-0 ">
            <h3 className="font-serif text-3xl font-light">Padel Courts</h3>
            <p>
              Discover our exceptional courts, carefully selected from renowned
              manufacturers and distributed by the most reputable companies
              across Europe. Our courts are internationally certified, ensuring
              the highest standards of quality and performance. We understand
              that different environments have unique requirements, which is why
              we offer a range of court models to cater to various needs.
            </p>
            <p>
              Among our selection, we have one specifically engineered for areas
              susceptible to high wind, hurricanes, and earthquakes. This
              particular model prioritizes durability and resilience, providing
              a safe and reliable playing surface even in challenging
              conditions. To learn more about our court models and their
              pricing, please contact us directly!
            </p>
          </div>
        </li>
        <li className="items-top flex flex-col justify-center lg:flex-row-reverse">
          <div className="flex items-center justify-center overflow-hidden lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1646649852033-7e0f3d679f8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
              alt="Spinning Ball with water"
              className="min-h-full	min-w-full shrink-0	object-cover"
            ></img>
          </div>
          <div className="space-y-6 p-6 py-10 md:px-0 lg:w-1/2 lg:pr-6">
            <h3 className="text-left font-serif text-3xl font-light">
              Provide Padel Club Consulting
            </h3>
            <p>
              A Padel Club is not just about the courts; it's about providing
              vibrant social environment where people come together to enjoy a
              unique experience. In addition to top-notch courts, we offer a
              complete setup up, including a pro shop and assist with
              establishing a coffee shop to ensure your clients have the best
              possible experience.
            </p>
            <p>
              Rest assured, we have you covered. Our dedicated team will work
              closely with you, offering guidance, insights, and solutions
              tailored to your specific needs. We aim to make your journey in
              establishing and running a Padel Club as seamless and rewarding as
              possible.
            </p>
            <p>
              Contact us today, and let us help you turn your vision into a
              thriving reality.
            </p>
          </div>
        </li>
        <li className="items-top flex flex-col justify-center lg:flex-row">
          <div className="flex items-center justify-center overflow-hidden lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Spinning Ball with water"
              className="min-h-full	min-w-full shrink-0	object-cover"
            ></img>
          </div>
          <div className="space-y-6 p-6 py-10 md:px-0 lg:w-1/2 lg:pl-6 ">
            <h3 className="font-serif text-3xl font-light">
              Setup Padel Store
            </h3>
            <p>
              Our expertise lies in working with the leading brands in the
              industry, allowing us to provide you with a top-notch Padel Pro
              Shop setup that will boost sales and maximize profits for your
              Padel Club.
            </p>
            <p>
              We understand that a well-equipped pro shop is an essential
              component of a successful Padel Club. It not only enhances the
              overall experience for your customers but also serves as a
              revenue-generating asset. With our extensive knowledge and
              connections in the industry, we can curate a wide selection of
              high-quality products from the best brands.
            </p>
            <p>
              We will source the latest equipment, apparel, accessories, and
              other Padel-related merchandise, ensuring that your pro shop
              offers a comprehensive range of products to meet the diverse needs
              of your customers.Moreover, our strategic guidance will help you
              have efficient inventory management to maximizing sales potential.
            </p>
          </div>
        </li>
      </ul>
      <CallToAction />
    </main>
  );
}

export default Services;
