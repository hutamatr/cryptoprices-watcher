import React from "react";
import { Link } from "react-router-dom";

import Love from "../../assets/favorite_black_24dp.svg";
import Twitter from "../../assets/twitter_logo.svg";
import LinkedIn from "../../assets/linkedin.png";

const Footer = () => {
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
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://twitter.com/huutamatr"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={Twitter} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/hutama-trirahmanto/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="" className="w-6" />
          </a>
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
