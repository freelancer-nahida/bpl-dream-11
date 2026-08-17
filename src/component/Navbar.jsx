import React from "react";
import dollarImg from "../assets/DoubleDollar.png";

const Navbar = ({ coin }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm  container mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      <div className="flex-none">
        <button className="btn justify-between items-center gap-2 font-bold text-xl">
          {coin} Coins
          <img src={dollarImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
