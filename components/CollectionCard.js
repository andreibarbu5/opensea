import Image from "next/image";
import React from "react";
import bluecheck from "../assets/bluecheck.png";

const CollectionCard = ({ rank, image, title, price }) => {
  return (
    <div className="flex space-x-4 items-center justify-between   w-full">
      <div className="flex  items-center space-x-4">
        <p className="font-bold text-gray-400 text-[20px]">{rank}</p>
        <div className="flex">
          <Image
            src={image}
            className="w-20 h-20 rounded-[1rem] object-cover"
          />
        </div>

        <div className="">
          <div className="flex items-center">
            <p className="font-semibold">{title}</p>
            <div className="">
              <Image src={bluecheck} className="flex w-8" />
            </div>
          </div>

          <p className=" text-[13px] text-gray-400">
            Floor: <span className="font-semibold text-gray-500">0.19 ETH</span>
          </p>
        </div>
      </div>

      <p className="font-semibold">{price}</p>
    </div>
  );
};

export default CollectionCard;
