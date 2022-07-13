import React from "react";
import { NavLink, Link } from "react-router-dom";

import CoinImage from "../../assets/coin.webp";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between bg-base-100 py-3 px-4 md:px-8">
      <div className="flex flex-row items-center gap-x-2">
        <div className="dropdown">
          <label
            tabIndex="0"
            className="btn btn-ghost hover:shadow-material-shadow md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu rounded-box menu-compact mt-4 flex w-52 flex-col gap-y-2 bg-base-100 px-4 py-3 shadow"
          >
            <NavLink
              to={"/"}
              className="btn btn-ghost justify-start hover:shadow-material-shadow"
            >
              Coin
            </NavLink>
            <NavLink
              to={"news"}
              className="btn btn-ghost justify-start hover:shadow-material-shadow"
            >
              News
            </NavLink>
            <NavLink
              to={"about"}
              className="btn btn-ghost justify-start hover:shadow-material-shadow"
            >
              About
            </NavLink>
          </ul>
        </div>
        <Link
          className="flex flex-row items-center gap-x-2 whitespace-nowrap text-xl font-bold normal-case"
          to={"/"}
        >
          <img src={CoinImage} alt="" className="w-8" />
          Coin Watch
        </Link>
      </div>
      <div className=" hidden md:flex">
        <ul className="menu menu-horizontal flex flex-row gap-x-6">
          <NavLink
            to={"/"}
            className="btn btn-ghost hover:shadow-material-shadow"
          >
            Coin
          </NavLink>
          <NavLink
            to={"news"}
            className="btn btn-ghost hover:shadow-material-shadow"
          >
            News
          </NavLink>
          <NavLink
            to={"about"}
            className="btn btn-ghost hover:shadow-material-shadow"
          >
            About
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
