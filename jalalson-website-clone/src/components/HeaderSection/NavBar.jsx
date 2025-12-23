import React from "react";

const NavBar = () => {
  return (
    <div className="font-bold text-white uppercase  lg:text-[10px] xl:text-[12px] border-2 border-red-600 w-full h-8 bg-black flex justify-center items-center">
      {/*backery items*/}
      <div className="w-[60%] flex flex-row  gap-2 justify-evenly">
        <div className="relative group cursor-pointer">
          <div className="flex items-center gap-1 hover:text-red-500">
            Bakery <span className="text-xs">▾</span>
          </div>
          <div className="absolute  top-full left-0 hidden group-hover:flex bg-black border border-gray-700 min-w-[250px] z-50 gap-4 p-2">
            <div className="flex flex-col gap-1 w-fit">
              <div className="px-3 py-2 hover:bg-red-600">Bread</div>
              <div className="px-3 py-2 hover:bg-red-600">Brownies</div>
              <div className="px-3 py-2 hover:bg-red-600">Cakes</div>
              <div className="px-3 py-2 hover:bg-red-600">Customized Cakes</div>
              <div className="px-3 py-2 hover:bg-red-600">
                Donuts and Cupcakes
              </div>
            </div>
             <div className="flex flex-col gap-1 w-fit">
              <div className="px-3 py-2 hover:bg-red-600">Pasteries</div>
              <div className="px-3 py-2 hover:bg-red-600">Rusk</div>
              <div className="px-3 py-2 hover:bg-red-600">Salad</div>
              <div className="px-3 py-2 hover:bg-red-600">Buns</div>
              <div className="px-3 py-2 hover:bg-red-600">
                puff Pasteries
              </div>
            </div>
             <div className="flex flex-col gap-1 w-fit">
              <div className="px-3 py-2 hover:bg-red-600">Biscuits and khatai</div>
              <div className="px-3 py-2 hover:bg-red-600">cake rusk</div>
              <div className="px-3 py-2 hover:bg-red-600">Confectionery</div>
              <div className="px-3 py-2 hover:bg-red-600">JS dairy</div>
              <div className="px-3 py-2 hover:bg-red-600">salted snackes
              </div>
            </div>
          </div>
        </div>
        {/*deli items*/}
        <div className="w-fit hover:text-red-500">deli</div>
        <div className="w-fit hover:text-red-500">Pan asian</div>
        <div className=" w-fit hover:text-red-500">js icecreams</div>
        <div className=" w-fit hover:text-red-500">sweets</div>
        <div className=" w-fit hover:text-red-500">deals</div>
        <div className=" w-fit hover:text-red-500">grocery</div>
        <div className=" w-fit hover:text-red-500">careers</div>
        <div className=" w-fit hover:text-red-500">franchise form</div>
        <div className=" w-fit hover:text-red-500">sell with us</div>
      </div>
    </div>
  );
};

export default NavBar;
