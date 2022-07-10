import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20">
      <div className="navbar flex flex-row items-center justify-between bg-base-100 px-8 md:px-12  lg:px-32">
        <div className="">
          <Link className="text-2xl normal-case" to={"/"}>
            Coin Watch
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal flex flex-row gap-x-6">
            <NavLink to={"/"} className="text-lg font-medium">
              Coin
            </NavLink>
            <NavLink to={"about"} className="text-lg font-medium">
              About
            </NavLink>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
