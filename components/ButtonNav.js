import React from "react";

const ButtonNav = ({ logo, title }) => {
  return (
    <div className="flex items-center px-4 pt-8 text-[25px] space-x-4 font-semibold ">
      {logo}
      <p className="">{title}</p>
    </div>
  );
};

export default ButtonNav;
