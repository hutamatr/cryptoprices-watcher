import React from "react";
import { useLocation } from "react-router-dom";

import headerImage from "../../assets/header-2.svg";
import AboutImage from "../../assets/About-us.svg";
import NewsImage from "../../assets/Search.svg";

const Hero = () => {
  const { pathname } = useLocation();

  const headerDesc = (title, desc) => {
    return (
      <div className="flex flex-col items-start gap-y-5 lg:max-w-[50%]">
        <h1 className="text-4xl font-bold lg:text-6xl">{title}</h1>
        <p className="text-md lg:max-w-[40vw] lg:text-lg">{desc}</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    );
  };

  const headerContent =
    pathname === "/" ? (
      <>
        {headerDesc(
          "Coin Watch",
          "Find the best price to buy/sell some of the top cryptocurrencies at the biggest crypto exchanges"
        )}
      </>
    ) : pathname === "/news" ? (
      <>
        {headerDesc(
          "Daily News",
          "Find the latest news about cryptocurrencies from the biggest crypto portal news"
        )}
      </>
    ) : (
      <>
        {headerDesc(
          "About",
          "Find the best price to buy/sell some of the top cryptocurrencies at the biggest crypto exchanges"
        )}
      </>
    );

  return (
    <div className="min-h-[80vh] bg-base-200 p-6 md:min-h-[40vh] md:p-12 lg:min-h-screen xl:min-h-[90vh]">
      <div className="flex flex-col items-center justify-center gap-y-8 gap-x-6 md:flex-row-reverse md:gap-y-0 lg:mt-12">
        <img
          src={
            pathname === "/"
              ? headerImage
              : pathname === "/news"
              ? NewsImage
              : AboutImage
          }
          alt=""
          className="md:max-w-sm lg:max-w-[50%]"
        />
        {headerContent}
      </div>
    </div>
  );
};

export default Hero;
