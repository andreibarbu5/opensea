import React from "react";
import NotableCard from "./NotableCard";
import monkey from "../assets/monkey.png";
import gif1 from "../assets/gif1.gif";
import pirates from "../assets/pirates.webp";
import guy from "../assets/guy.png";
import Image from "next/image";

const Notables = () => {
  const notables = [
    { image: monkey, profile: gif1, title: "Kurt the Roadie" },
    { image: monkey, profile: gif1, title: "Kurt the Roadie" },
  ];
  return (
    <div className="mx-7 sm:mx-10 mt-5 text-gray-600 ">
      <p className="font-semibold">Notable collections</p>
      <div className="  mt-8 sm:flex space-x-4">
        <div className="w-full">
          {" "}
          <NotableCard
            image={monkey}
            title="Kurt the Roadie"
            profile={gif1}
            className="w-full"
          />
        </div>

        <div className="hidden sm:inline-flex w-full">
          <NotableCard
            image={pirates}
            title="Kurt the Roadie"
            profile={pirates}
            className="w-full"
          />
        </div>

        <div className="hidden lg:inline-flex w-full">
          <NotableCard
            image={guy}
            title="Kurt the Roadie"
            profile={guy}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Notables;
