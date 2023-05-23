import React from "react";

function Contact() {
  return (
    <main className="flex flex-col md:h-full">
      <h1 className="sr-only">Contact Us</h1>
      <div
        className="banner-wrapper"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),
                       rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1526889836072-dbb0f1dbce66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80")`,
          backgroundPosition: "80% 75%",
        }}
      ></div>
      <div className="flex flex-col items-center justify-center space-y-6 pb-6 md:flex-row md:px-12">
        <div className="billboard-wrapper">
          <p className="billboard">
            Partner with us today and unlock the full potential of your Padel
            Club's pro shop, enhancing customer satisfaction and driving
            increased sales and profits.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center space-y-6 px-6 md:mx-auto md:w-3/5 md:items-center">
          <h2 className="font-serif text-4xl font-light">Contact Us</h2>
          <div className="flex flex-col space-y-2">
            <p className="text-left">
              Always more than happy to hear about something new we can start
              on. Chances are if you like Padel, think we'll be a good fit.
            </p>
            <p className="text-left">
              Also if you want to just talk to me, ask a question? Just let me
              know!
            </p>
          </div>
          <div class="flex items-center justify-start">
            <a class="btn-primary" href="mailto: support@padelessentials.com">
              Send Email
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
