import React from "react";

const FooterBtn = ({ icon }) => {
  return (
    <div>
      <div className="bg-[#2081e2] p-2 rounded-[0.5rem] text-[26px]  shrink-0  mt-2 hover:scale-110">
        {icon}
      </div>
    </div>
  );
};

export default FooterBtn;
