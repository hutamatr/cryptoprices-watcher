import React from "react";
import { Link } from "react-router-dom";

import Love from "../../assets/favorite_black_24dp.svg";
import Github from "../../assets/github.webp";

const Footer = () => {
  const socialMedia = (link, img) => {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="w-6" />
      </a>
    );
  };

  return (
    <footer className="footer footer-center rounded bg-base-200 p-10 text-base-content">
      <div className="grid grid-flow-col gap-4">
        <Link to={"about"} className="link link-hover">
          About us
        </Link>
        <Link to={"/"} className="link link-hover">
          Contact
        </Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-5">
          {socialMedia("https://github.com/hutamatr", Github)}
        </div>
      </div>
      <div>
        <p className="flex flex-row gap-x-2 font-bold">
          Made with
          <img src={Love} alt="" className="max-w-[1.25rem] animate-bounce" />
          by hutamatr
        </p>
      </div>
    </footer>
  );
};

export default Footer;
