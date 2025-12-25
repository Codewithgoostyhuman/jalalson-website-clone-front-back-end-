import React from 'react'

const LocationMenu = ({ isOpen, setIsOpen, setLocation }) => {
  return (
    <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-3xl shadow-2xl ${
            isOpen ? `opacity-100 visible` : `opacity-0 invisible`
          } flex items-center justify-center z-50 transition-opacity duration-700`}
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm shadow-2xl"
            onClick={() => setIsOpen(false)}
          />
          <div
            className={`bg-white p-6 rounded-lg w-80 relative transform transition-all duration-700 ease-in-out ${
              isOpen
                ? "scale-100 opacity-100 translate-y-0"
                : "scale-97 opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-xl font-bold mb-4">Select Your Location</h2>
            <select
              className="w-full p-2 border border-gray-300 rounded mb-4 cursor-pointer"
              onChange={(e) => {
                setLocation(e.target.value);
                setIsOpen(false);
              }}
            >
              <option value="" disabled selected>Select a location</option>
              <option value="Multan">Multan</option>
              <option value="Sialkot">Sialkot</option>
              <option value="Rawalpindi">Rawalpindi</option>
              <option value="Faisalabad">Faisalabad</option>
              <option value="Peshawar">Peshawar</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
            </select>

            <button
              className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
  )
}

export default LocationMenu
