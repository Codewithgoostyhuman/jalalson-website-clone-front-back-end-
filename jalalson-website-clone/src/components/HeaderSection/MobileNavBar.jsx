import React from "react";
import jalalsonLogo from "../../assets/jalasons-logo.webp";
import LocationMenu from "./LocationMenu";

const MobileNavBar = ({
  location,
  searchQuery,
  setSearchQuery,
  isAccountMenuOpen,
  isCartMenuOpen,
  setIsAccountMenuOpen,
  setIsCartMenuOpen,
  setIsLocationOpen,
}) => {
  return (
    <div className="bg-black text-[10px] sm:text-[10px] md:text-[12px] lg:hidden xl:hidden">
      <div className="lg:hidden w-full bg-black text-white flex items-center  px-3 py-2 pb-3">
        {/* Hamburger */}
        <div className="w-1/3 flex justify-start">
          {" "}
          <button
            className="flex flex-col gap-1"
          >
            <span className="w-5 h-0.5 bg-white"></span>
            <span className="w-5 h-0.5 bg-white"></span>
            <span className="w-5 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* Logo */}
        <div className="w-1/3 flex justify-center">
          <img
            src={jalalsonLogo}
            alt="Jalalson Logo"
            className="h-10 object-contain"
          />
        </div>

        {/* Right icons */}
        <div className="flex items-center justify-end w-1/3 gap-4">
          {/* Account */}
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/material-rounded/24/FFFFFF/user-male-circle.png"
            alt="account"
            onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
          />

          {/* Cart */}
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/material-rounded/24/FFFFFF/shopping-cart.png"
            alt="cart"
            onClick={() => setIsCartMenuOpen(!isCartMenuOpen)}
          />
        </div>
      </div>
      <div>
        {/* LOCATION */}
        <div
          className="flex items-center justify-center gap-2 py-2 "
          onClick={() => setIsLocationOpen(true)}
        >
          <img
            width="18"
            src="https://img.icons8.com/material-rounded/24/FFFFFF/marker.png"
          />
          <div
            className="w-fit text-white text-[10px] sm:text-[10px] md:text-[12px]"
            onClick={() => {
              setIsLocationOpen(true);
            }}
          >
            {location}
          </div>
        </div>
      </div>
      {/* MOBILE SEARCH */}
      <div className="lg:hidden bg-black px-3 pb-4 border-gray-700 flex items-center justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for products"
          className="w-full p-2 h-6 rounded text-white bg-gray-800 border border-gray-700"
        />
      </div>
    </div>
  );
};

export default MobileNavBar;
