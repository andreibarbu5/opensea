import React from "react";

import { TfiTwitter } from "react-icons/tfi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { GrReddit } from "react-icons/gr";
import { BsYoutube } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import FooterBtn from "./FooterBtn";
const Footer = () => {
  const icons = [
    <TfiTwitter />,
    <AiOutlineInstagram />,
    <FaDiscord />,
    <GrReddit />,
    <BsYoutube />,
    <SiTiktok />,
    <FiMail />,
  ];
  return (
    <div className="flex flex-col items-center   mt-8 font-bold text-[18px] bg-[#1868b7] text-white pb-8">
      <p className="pt-6 text text-[20px] font-">Stay in the app</p>
      <p className="font-normal text-center pt-4 md:pt-6 px-12 text-[15px]">
        Join our mailing list to stay in the loop with our newest feature
        releases, NFT drops, and tips and tricks for navigating OpenSea.
      </p>
      <div className="pt-6 md:pt-8 font-normal">
        <input
          type="search "
          className=" rounded-[0.8rem] text-thin pl-4 py-2.5"
          placeholder="Your email adress"
        />
        <button className="ml-4 bg-blue-500 p-2 rounded-[1rem] px-4 py-3 font-medium">
          Sign Up
        </button>
      </div>
      <p className="pt-6 md:pt-8 text text-[20px] font-">Join the community</p>
      <div className="mt-1">
        <ul className="flex gap-4 flex-wrap max-w-[60vw] justify-center pt-2">
          {icons.map((icon) => (
            <button>
              <FooterBtn icon={icon} className="hover:scale-110" />
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
