import React, { useEffect } from "react";

import CoinGecko from "../assets/coin-gecko.webp";
import Messari from "../assets/Messari.webp";

const About = () => {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, []);

  const aboutObj = [
    {
      image: CoinGecko,
      caption:
        " The app fetches crypto information, including price, price change, and market cap, from this API.",
    },
    {
      image: Messari,
      caption: `The app fetches crypto related news from this API.`,
    },
  ];

  const contentFigure = aboutObj.map((item, index) => {
    return (
      <figure
        className="flex w-full flex-col items-center justify-center gap-y-4 rounded-xl bg-base-300 p-4"
        key={index}
      >
        <div className="flex flex-row">
          <img src={item.image} alt="" className="w-48" />
        </div>
        <figcaption className="text-center text-sm">{item.caption}</figcaption>
      </figure>
    );
  });

  return (
    <section className="min-h-[100vh] px-6">
      <h1
        id="about-data"
        className="my-8 px-4 text-center text-2xl font-semibold md:text-3xl"
      >
        About
      </h1>
      <div class="mockup-window mx-auto my-8 max-w-xl border border-base-300 shadow-material-shadow">
        <div class="flex flex-col items-center justify-center gap-y-4 border-t border-base-300 px-8 py-10">
          <h2 className="text-xl font-semibold">
            Coin Watch is a web application that displays crypto prices and
            news.
          </h2>
          <p>The app uses the following third-party APIs:</p>
          {contentFigure}
        </div>
      </div>
    </section>
  );
};

export default About;
