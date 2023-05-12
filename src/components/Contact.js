import React from "react";

function Contact() {
  return (
    <div className="flex flex-col md:h-full">
      <h1 className="sr-only">Contact Us</h1>
      <div
        className="h-96"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),
                       rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1526889836072-dbb0f1dbce66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80")`,
          backgroundPosition: "80% 75%",
        }}
      ></div>
      <div className="flex flex-col md:flex-row md:grow">
        <div className="w-full p-6 space-y-6">
          <h2>Pitch Us</h2>
          <div className="space-y-2">
            <p className="text-left">
              Always more than happy to hear about something new we can start
              on. Chances are if you like Padel, think we'll be a good fit.
            </p>
            <p className="text-left">
              Also if you want to just talk to me, ask a question? Just let me
              know!
            </p>
          </div>
          <a
            class="btn btn-primary rounded-full"
            href="mailto: support@padelessentials.com"
          >
            Send Email
          </a>
        </div>
        <div className="w-full bg-neutral-600 p-6 space-y-6 text-neutral-100">
          <h2 className="">Contact Us</h2>
          <ul className="space-y-2">
            <li>
              <a href="mailto:support@padelessentials.com">
                support@padelessentials.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
