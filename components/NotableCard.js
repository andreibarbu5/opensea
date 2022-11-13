import React from "react";
import Image from "next/image";
import bluecheck from "../assets/bluecheck.png";

const NotableCard = ({ image, title, profile }) => {
  return (
    <div>
      <div className="flex w-full h-[20rem] sm:h-[15rem] rounded-[1rem] ">
        <Image src={image} className="object-cover rounded-t-[0.7rem] " />
      </div>
      <div className="shadow-md h-28 rounded-b-[0.7rem] relative">
        <div className="p-1 bg-white ">
          <Image
            src={profile}
            className="w-16 sm:w-20 rounded-[0.8rem] absolute -top-8 left-4 bg-white p-1 "
          />
        </div>
        <div className="flex pt-8 sm:pt-12 pl-4 font-semibold">
          <p className="">{title}</p>
          <Image src={bluecheck} className="w-12  -ml-1" />
        </div>
      </div>
    </div>
  );
};

export default NotableCard;
