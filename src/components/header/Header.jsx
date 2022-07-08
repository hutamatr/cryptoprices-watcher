import React from "react";
import headerImage from "../../assets/header.jpg";

const Header = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${headerImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold">Coin Watch</h1>
          <p className="mb-5 text-xl">
            get the latest update of cryptocurrency coin prices
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
