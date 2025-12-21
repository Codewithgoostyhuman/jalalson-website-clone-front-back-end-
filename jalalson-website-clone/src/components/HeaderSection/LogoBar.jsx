import React from "react";
import jalalsonLogo from "../../assets/jalasons-logo.webp";
import { useState } from "react";
import Account from "./Account";
import Cart from "./Cart";
const LogoBar = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [location, setLocation] = useState("Select Location");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAccountMenuOpen,setIsAccountMenuOpen] = useState(false);
  const [isCartMenuOpen,setIsCartMenuOpen] = useState(false);
  
  return (
    <>
      {/* Logo Bar Section */}
      <div
        className={`bg-black w-dvw h-fit flex items-center justify-center text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]`}
      >
        <div className="h-fit w-full sm:w-full md:w-full lg:w-full xl:w-full flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row xl:flex-row items-center justify-between p-2 text-white">
          <div className="h-fit w-fit sm:w-fit md:w-[40%] lg:w-[40%] xl:w-[40%] items-center flex flex-row md:flex-row justify-end gap-4 m-4 p-2">
            <div className="w-fit">
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
              className="w-fit text-[14px] sm:text-[14px] md:text-[14px] lg:text-[16px] xl:text-[18px]"
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
            <div className="h-fit w-1/2 sm:w-1/2 md:w-fit lg:w-fit xl:w-fit justify-end  flex flex-row gap-4 m-0">
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
            <div className="h-fit w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 items-center flex flex-row gap-4 m-0">
              <button className="bg-red-700 pt-2 pb-2 pr-4 pl-4 xl:pt-2 xl:pb-2 xl:pl-10 xl:pr-10  lg:pt-2 lg:pb-2 lg:pl-10 lg:pr-10  md:pt-2 md:pb-2 md:pl-4 md:pr-4  sm:pt-2 sm:pb-2 sm:pl-4 sm:pr-4 text-sm text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] rounded-2xl font-bold font-sans">
                JS New Arrivals
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Location Menu */}
      {isLocationOpen && (
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-3xl shadow-2xl ${
          isLocationOpen ? `opacity-100 visible` : `opacity-0 invisible`
        } flex items-center justify-center z-50 transition-opacity duration-700`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm shadow-2xl"
          onClick={() => setIsLocationOpen(false)}
        />
        <div
          className={`bg-white p-6 rounded-lg w-80 relative transform transition-all duration-700 ease-in-out ${
            isLocationOpen
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-97 opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-xl font-bold mb-4">Select Your Location</h2>
          <select
            className="w-full p-2 border border-gray-300 rounded mb-4"
            onChange={(e) => {
              setLocation(e.target.value);
              setIsLocationOpen(false);
            }}
          >
            <option value="Faisalabad">Faisalabad</option>
            <option value="Peshawar">Peshawar</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Karachi">Karachi</option>
            <option value="Lahore">Lahore</option>
          </select>

          <button
            className="bg-red-600 text-white px-4 py-2 rounded"
            onClick={() => setIsLocationOpen(false)}
          >
            Close
          </button>
        </div>
      </div>)
      }
      {/*Account/Login Menu*/}
      {isAccountMenuOpen && (
      <Account isOpen= {setIsAccountMenuOpen} />
      )}

      {/*Cart Menu*/}
      {isCartMenuOpen && (
      <Cart isOpen= {setIsCartMenuOpen} />
      )}
      
    </>
  );
};

export default LogoBar;
