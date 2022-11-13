import React from "react";
import NotableCard from "./NotableCard";

import monkey from "../assets/monkey.png";
import gif1 from "../assets/gif1.gif";
import pirates from "../assets/pirates.webp";
import guy from "../assets/guy.png";
import coolcookies from "../assets/coolcookies.png";
import hearth from "../assets/hearth.png";
import food from "../assets/food.png";
import foodpic from "../assets/foodpic.png";
import crumby from "../assets/crumby.png";
import west from "../assets/west.png";

const FoodNft = () => {
  return (
    <div className="mx-7 sm:mx-10 mt-5 text-gray-600 ">
      <p className="font-semibold">Notable collections</p>
      <div className="  mt-8 sm:flex space-x-4">
        <div className="w-full">
          <NotableCard
            image={coolcookies}
            title="Kurt the Roadie"
            profile={hearth}
            className="w-full"
          />
        </div>

        <div className="hidden sm:inline-flex w-full">
          <NotableCard
            image={food}
            title="Kurt the Roadie"
            profile={foodpic}
            className="w-full"
          />
        </div>

        <div className="hidden lg:inline-flex w-full">
          <NotableCard
            image={west}
            title="Kurt the Roadie"
            profile={crumby}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FoodNft;
