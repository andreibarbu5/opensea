import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import opensea from "../assets/opensea.svg";
import logotext from "../assets/openseatext.png";
import { FaSearch } from "react-icons/fa";
import { GrSearch } from "react-icons/Gr";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

const Navbar = ({ setModal }) => {
  return (
    <div className="fixed top-0 flex justify-between p-5 items-center lg:px-10 bg-white/90 z-40 w-full ">
      {/* Left */}
      <div className="flex items-center mr-9 shrink-0">
        <div className="mr-2">
          <Link href="/">
            <Image src={opensea} className="w-[2.5rem]" />
          </Link>
        </div>
        <div className="">
          <Image src={logotext} className="w-[7rem]" />
        </div>
      </div>

      {/* Middle */}
      <div className="hidden sm:flex w-full relative  items-center">
        <input
          type="search"
          placeholder="Search items, collections, and accounts"
          className="bg-[#e3f0fc] p-2 rounded-[0.5rem] w-full py-3 pl-[2.5rem] pr-8"
        />
        <GrSearch className="absolute text-[20px] left-[0.8rem] text-blue-200 " />

        <div className="absolute bg-gray-300 py-1 px-2.5 right-[0.8rem] rounded-[0.5rem] text-gray-500 text-[13px]">
          /
        </div>
      </div>

      {/* Right */}
      <div className="xl:flex">
        <div className="hidden xl:inline-flex space-x-6 ml-12">
          <button className="font-semibold">Explore</button>
          <button className="font-semibold">Stats</button>
          <button className="font-semibold">Resources</button>
          <button className="font-semibold">Create</button>
        </div>
        <div className="flex ml-12 lg:ml-8 space-x-[1.25rem] lg:space-x-[1.75rem]">
          <BiUserCircle className="w-[2.2rem] h-[2.2rem]  hidden lg:flex" />
          <MdOutlineAccountBalanceWallet className="w-[2.2rem] h-[2.2rem]   hidden lg:flex" />
          <GrSearch className="w-[2.1rem] h-[2.1rem]  sm:hidden    " />

          <Link href="/signin">
            <MdOutlineShoppingCart className="w-[2.2rem] h-[2.2rem] " />
          </Link>

          <FiMenu className="w-[2rem] h-[2rem]  " onClick={() => setModal()} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
