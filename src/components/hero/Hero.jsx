import React from "react";

import headerImage from "../../assets/header-2.svg";

const Hero = () => {
  return (
    <div className="min-h-[30vh] bg-base-200 p-6 md:p-10 lg:min-h-screen xl:min-h-[90vh]">
      <div className="flex flex-col items-center justify-center gap-x-6 md:flex-row-reverse lg:mt-12">
        <img src={headerImage} alt="" className="md:max-w-sm lg:max-w-2xl" />
        <div className="flex flex-col items-start gap-y-5">
          <h1 className="text-2xl font-bold lg:text-4xl">Coin Watch</h1>
          <p className="text-md lg:text-xl">
            Find the best price to buy/sell some of the top cryptocurrencies at
            the biggest crypto exchanges
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
