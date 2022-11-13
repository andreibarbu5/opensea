import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Trending = () => {
  return (
    <div className="mx-7 sm:mx-10 mt-8">
      <div className="  border-b flex items-center justify-between  ">
        <div className="flex text-[25px] md:text-[30px]   font-semibold space-x-4 ">
          <button className="focus:border-b-[3px] focus:border-black  ">
            Trending
          </button>
          <button className="focus:border-b-[3px] focus:border-black   ">
            Top
          </button>
        </div>
        <div className="flex space-x-4 md:text-[19px]">
          <div className="hidden sm:flex space-x-4  ">
            <div className="border p-1 text-center rounded-[0.7rem] items-center">
              <button className="flex items-center text-gray-500 px-1">
                24h <MdKeyboardArrowDown />
              </button>
            </div>
            <div className="border p-1 text-center rounded-[0.7rem] px-">
              <button className="flex items-center">
                All chains <MdKeyboardArrowDown />
              </button>
            </div>
          </div>

          <div className="border p-1 text-center rounded-[0.7rem] items-center h-full">
            <button>View All</button>
          </div>
        </div>
      </div>

      <div className=" flex sm:hidden space-x-4 mt-2">
        <div className="border p-1 text-center rounded-[0.7rem] w-full flex justify-between items-center">
          <button className="flex items-center pl-2">All chains</button>
          <MdKeyboardArrowDown />
        </div>
        <div className="border p-1 text-center rounded-[0.7rem] w-full pl-2 flex justify-between items-center text-gray-500">
          <button className="flex items-center  px-1">24h</button>
          <MdKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Trending;
