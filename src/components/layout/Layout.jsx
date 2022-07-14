import React from "react";

import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <header className="sticky top-0 z-30">
        <Navbar />
      </header>
      <main>
        <Hero />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
