import React from "react";

const NavBar = () => {
  return (
    <div className=" text-white uppercase text-[6px] sm:text-[8px] md:text-[8px] lg:text-[10px] xl:text-[12px] border-2 border-red-600 w-full h-8 bg-black flex justify-center items-center">
      <div className="w-[90%] flex flex-row gap-1 justify-evenly border-white border">
        <div className="w-fit">backery</div>
        <div className="w-fit">deli</div>
        <div className="w-fit">Pan asian</div>
        <div className=" w-fit">js icecreams</div>
        <div className=" w-fit">sweets</div>
        <div className=" w-fit">deals</div>
        <div className=" w-fit">grocery</div>
        <div className=" w-fit">careers</div>
        <div className=" w-fit">franchise form</div>
        <div className=" w-fit">sell with us</div>
      </div>
    </div>
  );
};

export default NavBar;
