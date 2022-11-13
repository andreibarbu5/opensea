import React from "react";
import ButtonNav from "../components/ButtonNav";
import { SlCompass } from "react-icons/sl";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoIosPaper } from "react-icons/io";
import { MdCreate } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { BsMoonFill } from "react-icons/bs";

const Sidebar = () => {
  const buttons = [
    { title: "Explore", logo: <SlCompass /> },
    { title: "Stats", logo: <IoStatsChartSharp /> },
    { title: "Resources", logo: <IoIosPaper /> },
    { title: "Create", logo: <MdCreate /> },
    { title: "Language", logo: <BiWorld /> },
    { title: "Night Mode", logo: <BsMoonFill /> },
  ];
  return (
    <div className="top-0 w-[20rem] h-screen mx  fixed inset-0 bg-[#bad6f0]/[95%] z-50 pl-6 pt-2 backdrop-blur-lg bg-red-400 ">
      <div className="   text-black ">
        {buttons.map((button) => (
          <ButtonNav title={button.title} logo={button.logo} />
        ))}
      </div>
      <div className="mr-6">
        <button className="bg-blue text-white font-semibold w-full rounded-[0.8rem] py-4 bg-blue-500 hover:bg-blue-400 mt-10 ">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
