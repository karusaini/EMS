import React from "react";
import menuicon from "../assets/menuicon.svg";
import logomark from "../assets/logomark.svg";
import search from "../assets/search.svg";
import menu from "../assets/menu.png";
import moon from "../assets/moon.svg";

const Navbar = () => {
  return (
    <nav className="w-[1344px] h-[56px] py-[12px] px-0 border-b-[1.5px] flex justify-between bg-[#FBFDFC]">
      <div className="flex items-center justify-between w-[138px] h-[32px] gap-[24px]">
        <div className="w-[24px] h-[24px]">
          <img src={menuicon} alt="Menu icon" className="" />
        </div>
        {/* LOGO */}
        <div className="flex items-center w-[90px] h-[32px] gap-[4px]">
          <div className="w-[32px] h-[32px]">
            <img src={logomark} alt="logomark" className="" />
          </div>
          <h1 className="flex items-center w-[54px] h-[16px] font-[Sen] text-[24px] font-bold leading-[24px] tracking-[-0.04em] text-[#3F9142]">
            DoIt
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center w-[446.33px] h-[24px] gap-[24px]">
        <div className="w-[24px] h-[24px]">
          <img src={search} alt="search icon" className="" />
        </div>

        <div className="w-[24px] h-[24px]">
          <img src={menu} alt="grid icon" className="" />
        </div>

        <div className="w-[24px] h-[24px]">
          <img src={moon} alt="darkmoon icon" className="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
