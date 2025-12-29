import React from "react";

const NavBar = () => {
  const bakeryItems = [
  { name: "Bread", quantity: 200, price: 200 },
  { name: "Brownies", quantity: 200, price: 200 },
  { name: "Cakes", quantity: 200, price: 200 },
  { name: "Customized Cakes", quantity: 200, price: 200 },
  { name: "Donuts and Cupcakes", quantity: 200, price: 200 },
  { name: "Biscuits and khatai", quantity: 200, price: 200 },
  { name: "Cake rusk", quantity: 200, price: 200 },
  { name: "Confectionery", quantity: 200, price: 200 },
  { name: "Pastries", quantity: 200, price: 200 },
  { name: "Rusk", quantity: 200, price: 200 },
  { name: "Salad", quantity: 200, price: 200 },
  { name: "Buns", quantity: 200, price: 200 },
  { name: "Puff Pastries", quantity: 200, price: 200 },
  { name: "JS Dairy", quantity: 200, price: 200 },
  { name: "Salted Snacks", quantity: 200, price: 200 },
];

const deliItems = [
  { name: "Burgers", quantity: 200, price: 200 },
  { name: "Deli Fish", quantity: 200, price: 200 },
  { name: "JS New Arrivals", quantity: 200, price: 200 },
  { name: "Peri Peri Chicken", quantity: 200, price: 200 },
  { name: "Pizza", quantity: 200, price: 200 },
  { name: "Sandwich", quantity: 200, price: 200 },
  { name: "Italian Cuisine", quantity: 200, price: 200 },
  { name: "Crispy Fried Chicken", quantity: 200, price: 200 },
];

const panAsianItems = [
  { name: "Classic Entree", quantity: 200, price: 200 },
  { name: "Premium Entree", quantity: 200, price: 200 },
  { name: "Starters", quantity: 200, price: 200 },
  { name: "Chow Mein", quantity: 200, price: 200 },
  { name: "Premium Entree (Sea Food)", quantity: 200, price: 200 },
];

  const groceryItems = [
  { name: "butter", quantity: 50, price: 200 },
  { name: "beverages", quantity: 30, price: 150 },

  { name: "baking goods", quantity: 200, price: 200 },
  { name: "cereal, jams and spreads", quantity: 200, price: 200 },
  { name: "cleaning products", quantity: 200, price: 200 },
  { name: "diapers and pampers", quantity: 200, price: 200 },
  { name: "fresh milk and eggs", quantity: 200, price: 200 },
  { name: "flour, rice and pulses", quantity: 200, price: 200 },
  { name: "ketchup, sauce and mayo", quantity: 200, price: 200 },
  { name: "other food items", quantity: 200, price: 200 },
  { name: "pet food", quantity: 200, price: 200 },
  { name: "spices and miscellaneous", quantity: 200, price: 200 },
  { name: "toiletries", quantity: 200, price: 200 },
  { name: "yoghurt, butter, cream and cheese", quantity: 200, price: 200 },
  { name: "baby milk and food", quantity: 200, price: 200 },
  { name: "biscuits and food", quantity: 200, price: 200 },
  { name: "canned food and milks", quantity: 200, price: 200 },
  { name: "confectionery and chocolates", quantity: 200, price: 200 },
  { name: "cosmetics", quantity: 200, price: 200},
  { name: "dry fruits and dates", quantity: 200, price: 200 },
  { name: "frozen foods", quantity: 200, price: 200 },
  { name: "ghee and oil", quantity: 200, price: 200 },
  { name: "mineral water", quantity: 200, price: 200 },
  { name: "tea and coffee", quantity: 200, price: 200 },
  { name: "tissues and sanitary", quantity: 0, price: 0 }
];

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
      
      <div className="lg:w-[70%] xl:w-[60%] flex flex-row  gap-2 justify-evenly">
        {/*backery items*/}
        <div className="relative group cursor-pointer">
          <div className="flex items-center gap-1 hover:text-red-500">
            Bakery <span className="text-xs">▾</span>
          </div>
          <div className="absolute  top-full left-0 hidden group-hover:flex bg-black min-w-[250px] z-50 gap-4 p-2">
            <div className="flex flex-col gap-1 lg:w-[200px] xl:w-[300px] capitalize">
              {backeryFirstHalf.map((item, index) => (
                <div key={index} className="px-3 py-2 hover:bg-red-600">
                  {item.name}
                </div>
              ))}
            </div>
 
            <div className="flex flex-col gap-1 lg:w-[200px] xl:w-[300px] capitalize">
              {backerySecondHalf.map((item, index) => (
                <div key={index} className="px-3 py-2 hover:bg-red-600">
                  {item.name}
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
            <div className="flex flex-col gap-1 lg:w-[200px] xl:w-[300px] capitalize">
              {deliFirstHalf.map((item, index) => (
                <div key={index} className="px-3 py-2 hover:bg-red-600">
                  {item.name}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1 lg:w-[200px] xl:w-[300px] capitalize">
              {deliSecondHalf.map((item, index) => (
                <div key={index} className="px-3 py-2 hover:bg-red-600">
                  {item.name}
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
            <div className="flex flex-col gap-1 lg:w-[200px] xl:w-[300px] capitalize">
              {panAsianFirstHalf.map((item, index) => (
                <div key={index} className="px-3 py-2 hover:bg-red-600">
                  {item.name}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1 lg:w-[200px] xl:w-[300px] capitalize">
              {panAsianSecondHalf.map((item, index) => (
                <div key={index} className="px-3 py-2 hover:bg-red-600">
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" w-fit hover:text-red-500 cursor-pointer">js icecreams</div>
        <div className=" w-fit hover:text-red-500 cursor-pointer">sweets</div>
        <div className=" w-fit hover:text-red-500 cursor-pointer">deals</div>
        {/*grocery items*/}
        <div className="relative group cursor-pointer">
          <div className="flex items-center gap-1 hover:text-red-500">
            Grocery <span className="text-xs">▾</span>
          </div>
          <div className="absolute top-full left-0 hidden group-hover:flex bg-black min-w-[250px] z-50 gap-4 p-2">
            <div className="flex flex-col gap-1 lg:w-[200px] xl:w-[300px] capitalize">
              {groceryFirstHalf.map((item, index) => (
                <div key={index} className="px-3 py-2 hover:bg-red-600">
                  {item.name}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1 lg:w-[200px] xl:w-[300px] capitalize">
              {grocerySecondHalf.map((item, index) => (
                <div key={index} className="px-3 py-2 hover:bg-red-600">
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" w-fit hover:text-red-500 cursor-pointer">careers</div>
        <div className=" w-fit hover:text-red-500 cursor-pointer">franchise form</div>
        <div className=" w-fit hover:text-red-500 cursor-pointer">sell with us</div>
      </div>
    </div>
  );
};

export default NavBar;
