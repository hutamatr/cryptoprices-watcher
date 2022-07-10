import React, { Fragment } from "react";

import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Hero />
        {children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
