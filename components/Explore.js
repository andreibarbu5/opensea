import Image from "next/image";
import React from "react";
import spacesuit from "../assets/spacesuit.png";
import goblin from "../assets/goblin.png";
import lightborn from "../assets/lightborn.png";
import skull from "../assets/skull.png";
import Card from "./Card";

const Explore = () => {
  const cards = [
    { title: "LIGHTBORN AVATARS", image: lightborn },
    { title: "Spacesuit NFT", image: spacesuit },
  ];
  return (
    <div className="flex flex-col justify-center mt-[5.5rem] sm:mx-10 md:mx-2">
      <div className="mx-4">
        <p className="font-bold text-[32px] lg:text-[40px]  text-center">
          Explore, collect, and sell NFTs
        </p>
      </div>
      <div className="sm:flex sm:space-x-[1.2rem] md:space-x-[1rem] mx-auto">
        <Card image={lightborn} title="LIGHTBORN AVATARS" className=" " />
        <div className="hidden sm:inline-flex">
          <Card image={goblin} title="Spacesuit NFT  " className="" />
        </div>

        <div className=" hidden md:inline-flex">
          <Card image={skull} title="LIGHTBORN AVATARS  " className=" " />
        </div>

        <div className="hidden lg:inline-flex">
          <Card
            image={spacesuit}
            title="LIGHTBORN AVATARS hidden lg:inline-flex"
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
