import React from "react";

const NavBar = () => {
  const bakeryItems = [
    "Bread",
    "Brownies",
    "Cakes",
    "Customized Cakes",
    "Donuts and Cupcakes",
    "Biscuits and khatai",
    "Cake rusk",
    "Confectionery",
    "Pastries",
    "Rusk",
    "Salad",
    "Buns",
    "Puff Pastries",
    "JS Dairy",
    "Salted Snacks",
  ];
  const deliItems=[
    "burgers",
    "deli Fish",
    "js new arrivals",
    "peri peri chicken",
    "pizza",
    "sandwich",
    "italian cuisine",
    "crispy fried chicken",
  ]
  const panAsianItems=[
    "classic entree",
    "premium entree",
    "starters",
    "chow Mein",
    "premium entree(sea food)",
  ]
  const groceryItems=["butter",
    "beverages",
    "baking goods",
    "cereal,jams and spreads",
    "cleaning products",
    "diapers and pampers",
    "fresh milk and eggs",
    "flour, rice and pulses",
    "ketchup,sauce and mayo",
    "other food items",
    "pet food",
    "spices and miscellaneous",
    "toiletries",
    "yoghurt,butter,cream and cheese",
    "baby milk and food",
    "biscuits and food",
    "canned food and milks",
    "confectionery and chocolates",
    "cosmetics",
    "dry fruits and dates",
    "frozen foods",
    "ghee and oil",
    "mineral water",
    "tea and coffee",
    "tisssues and sanitary",
  ]
  const backeryMid = Math.ceil(bakeryItems.length / 2);
  const backeryFirstHalf = bakeryItems.slice(0, backeryMid);
  const backerySecondHalf = bakeryItems.slice(backeryMid);

  const deliMid = Math.ceil(deliItems.length / 2);
  const deliFirstHalf = deliItems.slice(0, deliMid);
  const deliSecondHalf = deliItems.slice(deliMid);

  const panAsianMid = Math.ceil(panAsianItems.length / 2);
  const panAsianFirstHalf = panAsianItems.slice(0, panAsianMid);
  const panAsianSecondHalf = panAsianItems.slice(panAsianMid);

  const groceryMid = Math.ceil(groceryItems.length / 2);
  const groceryFirstHalf = groceryItems.slice(0, groceryMid);
  const grocerySecondHalf = groceryItems.slice(groceryMid);
  return (
    <div className="font-bold text-white uppercase  lg:text-[10px] xl:text-[12px]  w-full h-8 bg-black border-b border-t border-gray-700 flex justify-center items-center">
      
      <div className="lg:w-[60%] xl:w-[50%] flex flex-row  gap-2 justify-evenly">
        {/*backery items*/}
        <div className="relative group cursor-pointer">
          <div className="flex items-center gap-1 hover:text-red-500">
            Bakery <span className="text-xs">▾</span>
          </div>
          <div className="absolute  top-full left-0 hidden group-hover:flex bg-black min-w-[250px] z-50 gap-4 p-2">
            <div className="flex flex-col gap-1 lg:w-[200px] xl:w-[300px]">
              {backeryFirstHalf.map((item, index) => (
                <div key={index} className="px-3 py-2 hover:bg-red-600">
                  {item}
                </div>
              ))}
            </div>
 
            <div className="flex flex-col gap-1 lg:w-[200px] xl:w-[300px]">
              {backerySecondHalf.map((item, index) => (
                <div key={index} className="px-3 py-2 hover:bg-red-600">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*deli items*/}
        <div className="relative group cursor-pointer">
          <div className="flex items-center gap-1 hover:text-red-500">
            Deli <span className="text-xs">▾</span>
          </div>
          <div className="absolute top-full left-0 hidden group-hover:flex bg-black min-w-[250px] z-50 gap-4 p-2">
            <div className="flex flex-col gap-1 lg:w-[200px] xl:w-[300px]">
              {deliFirstHalf.map((item, index) => (
                <div key={index} className="px-3 py-2 hover:bg-red-600">
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1 lg:w-[200px] xl:w-[300px]">
              {deliSecondHalf.map((item, index) => (
                <div key={index} className="px-3 py-2 hover:bg-red-600">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*pan asian items*/}
        <div className="relative group cursor-pointer">
          <div className="flex items-center gap-1 hover:text-red-500">
            Pan Asian <span className="text-xs">▾</span>
          </div>
          <div className="absolute top-full left-0 hidden group-hover:flex bg-black min-w-[250px] z-50 gap-4 p-2">
            <div className="flex flex-col gap-1 lg:w-[200px] xl:w-[300px]">
              {panAsianFirstHalf.map((item, index) => (
                <div key={index} className="px-3 py-2 hover:bg-red-600">
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1 lg:w-[200px] xl:w-[300px]">
              {panAsianSecondHalf.map((item, index) => (
                <div key={index} className="px-3 py-2 hover:bg-red-600">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" w-fit hover:text-red-500">js icecreams</div>
        <div className=" w-fit hover:text-red-500">sweets</div>
        <div className=" w-fit hover:text-red-500">deals</div>
        {/*grocery items*/}
        <div className="relative group cursor-pointer">
          <div className="flex items-center gap-1 hover:text-red-500">
            Grocery <span className="text-xs">▾</span>
          </div>
          <div className="absolute top-full left-0 hidden group-hover:flex bg-black min-w-[250px] z-50 gap-4 p-2">
            <div className="flex flex-col gap-1 lg:w-[200px] xl:w-[300px]">
              {groceryFirstHalf.map((item, index) => (
                <div key={index} className="px-3 py-2 hover:bg-red-600">
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1 lg:w-[200px] xl:w-[300px]">
              {grocerySecondHalf.map((item, index) => (
                <div key={index} className="px-3 py-2 hover:bg-red-600">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" w-fit hover:text-red-500">careers</div>
        <div className=" w-fit hover:text-red-500">franchise form</div>
        <div className=" w-fit hover:text-red-500">sell with us</div>
      </div>
    </div>
  );
};

export default NavBar;
