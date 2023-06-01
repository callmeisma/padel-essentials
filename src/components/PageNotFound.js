import React from "react";
import { Helmet } from "react-helmet-async";

function About() {
  return (
    <main className="flex flex-col items-center justify-center space-y-12 px-6">
      <Helmet>
        <title>Page Not Found</title>
        <meta
          name="description"
          content="The site you searched for was not found. You didn't break the internet, but we can't find what you are looking
        for"
        />
        <link rel="canonical" href="/404" />
      </Helmet>
      <p className="text-8xl">404</p>
      <h1 className="text-lg font-normal">
        You didn't break the internet, but we can't find what you are looking
        for
      </h1>
    </main>
  );
}

export default About;
