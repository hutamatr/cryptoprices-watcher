import React from "react";

import headerImage from "../../assets/header-2.svg";

const Hero = () => {
  return (
    <div className="flex min-h-screen min-w-full items-center justify-center bg-base-200 md:min-h-[50vh] lg:min-h-screen">
      <div className="flex flex-col items-center justify-between gap-y-8 p-8 md:flex-row-reverse  xl:gap-x-16">
        <img
          src={headerImage}
          alt=""
          className="min-h-full max-w-sm lg:max-w-2xl 2xl:max-w-5xl"
        />
        <div className="">
          <h1 className="text-5xl font-bold 2xl:text-5xl">Coin Watch</h1>
          <p className="py-6 2xl:text-xl">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
