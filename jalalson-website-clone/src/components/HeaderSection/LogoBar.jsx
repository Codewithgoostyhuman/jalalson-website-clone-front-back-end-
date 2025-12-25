import React from "react";
import jalalsonLogo from "../../assets/jalasons-logo.webp";
import { useState } from "react";
import Account from "./Account";
import Cart from "./Cart";
import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";
import LocationMenu from "./LocationMenu";
import NewArrivalsButton from "./NewArrivalsButton";
const LogoBar = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [location, setLocation] = useState("Select Location");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  return (
    <>
      <div className="hidden lg:block">
        {/* Logo Bar Section */}
        <div
          className={`bg-black w-full h-fit flex items-center justify-center text-[10px] sm:text-[10px] md:text-[12px] lg:text-[12px] xl:text-[12px]`}
        >
          <div className="h-fit w-full sm:w-full md:w-full lg:w-full xl:w-full flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row xl:flex-row items-center justify-between p-2 text-white">
            <div className="h-fit w-fit sm:w-fit md:w-[40%] lg:w-[40%] xl:w-[40%] items-center flex flex-row md:flex-row justify-end gap-4 m-4 p-2">
              <div className="w-fit cursor-pointer flex flex-row gap-2 items-center">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/material-rounded/24/FFFFFF/marker.png"
                  alt="marker"
                  onClick={() => {
                    setIsLocationOpen(true);
                  }}
                />
                {isSearchOpen && (
                  <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
                    <div
                      className="absolute inset-0"
                      onClick={() => setIsSearchOpen(false)}
                    />

                    <div className="relative bg-white p-4 rounded-lg shadow-lg transform transition-all duration-500 scale-95 opacity-100 animate-scaleIn">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for Products"
                        className="w-64 p-2 border border-gray-300 rounded text-black"
                        autoFocus
                      />
                      <button
                        className="mt-2 bg-red-600 text-white px-4 py-2 rounded"
                        onClick={() => setIsSearchOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="w-fit text-[14px] sm:text-[14px] md:text-[14px] lg:text-[16px] xl:text-[16px] cursor-pointer"
                onClick={() => {
                  setIsLocationOpen(true);
                }}
              >
                {location}
              </div>
            </div>
            <img
              src={jalalsonLogo}
              alt="Jalalson Logo"
              className="h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 xl:w-[20%] lg:w-[20%] md:w-[20%] sm:w-30 object-contain m-4 transition-all duration-1000 ease-in-out items-center"
            />
            <div className="h-fit w-full sm:w-full md:w-[40%] lg:w-[40%] xl:w-[40%] items-center justify-start flex flex-row-reverse xl:flex-row lg:flex-row md:flex-row sm:flex-row-reverse gap-4 m-auto">
              <div className="h-fit w-1/2 sm:w-1/2 md:w-fit lg:w-fit xl:w-fit justify-end  flex flex-row gap-4 m-0 cursor-pointer">
                <div>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/material-sharp/24/FFFFFF/search.png"
                    alt="search"
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                  />
                </div>
                <div>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/material-rounded/24/FFFFFF/user-male-circle.png"
                    alt="user-male-circle"
                    onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
                  />
                </div>
                <div>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/material-rounded/24/FFFFFF/shopping-cart.png"
                    alt="shopping-cart"
                    onClick={() => setIsCartMenuOpen(!isCartMenuOpen)}
                  />
                </div>
              </div>
              <NewArrivalsButton />
            </div>
          </div>
        </div>
        {/* Navigation Bar */}
        <NavBar />
      </div>

      {/*Mobile Navigation Bar*/}
      <MobileNavBar location={location}  searchQuery ={searchQuery} setSearchQuery = {setSearchQuery} isAccountMenuOpen={isAccountMenuOpen} isCartMenuOpen={isCartMenuOpen}  setIsAccountMenuOpen={setIsAccountMenuOpen} setIsCartMenuOpen={setIsCartMenuOpen} setIsLocationOpen={setIsLocationOpen} />
      
      {/* Location Menu */}
      {isLocationOpen && (
        <LocationMenu
          setIsOpen={setIsLocationOpen}
          setLocation={setLocation}
          isOpen={isLocationOpen}
        />
      )}
      {/*Account/Login Menu*/}
      {isAccountMenuOpen && <Account isOpen={setIsAccountMenuOpen} />}

      {/*Cart Menu*/}
      {isCartMenuOpen && <Cart isOpen={setIsCartMenuOpen} />}
    </>
  );
};

export default LogoBar;
