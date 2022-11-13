import React from "react";
import spooky from "../assets/spooky.png";
import CollectionCard from "./CollectionCard";
import hape from "../assets/hape.webp";

import doge from "../assets/doge.jpg";
import lightborn from "../assets/lightborn.png";
import goblin from "../assets/goblin.png";

const Collection = () => {
  const collections = [
    {
      rank: 1,
      image: spooky,
      title: "Otherdeed for Otherside",
      price: "560eth",
    },
    {
      rank: 2,
      image: hape,
      title: "Otherdeed for Otherside",
      price: "560eth",
    },
    {
      rank: 3,
      image: doge,
      title: "Otherdeed for Otherside",
      price: "560eth",
    },
    {
      rank: 4,
      image: lightborn,
      title: "Otherdeed for Otherside",
      price: "560eth",
    },
    {
      rank: 5,
      image: goblin,
      title: "Otherdeed for Otherside",
      price: "560eth",
    },
  ];
  return (
    <div className=" ">
      <div className="   sm:mx-10 mt-4 lg:flex lg:justify-between lg:mx-auto lg:max-w-[85vw]">
        <div className="  w-full mr-12">
          <div className="">
            <p className="text-[12.5px] font-semibold text-gray-500">
              COLLECTION
            </p>
          </div>
          <div className="space-y-6 mt-4 w-full  ">
            {collections.map((collection) => (
              <CollectionCard
                rank={collection.rank}
                image={collection.image}
                title={collection.title}
                price={collection.price}
              />
            ))}
          </div>
        </div>
        <div className="hidden  lg:block  w-full ml-12">
          <div className="">
            <p className="text-[12.5px] font-semibold text-gray-500">
              COLLECTION
            </p>
          </div>
          <div className="space-y-6 mt-4">
            {collections.map((collection) => (
              <CollectionCard
                rank={collection.rank}
                image={collection.image}
                title={collection.title}
                price={collection.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
