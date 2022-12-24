import React from "react";
import { HiMapPin } from "react-icons/hi2";

const SubNavbar = () => {
  return (
    <div className="py-2 px-2 md:px-4 backdrop-blur-3xl hidden md:flex items-center shadow-md z-10 justify-between bg-gradient-to-r from-gray-100 via-[#ffd5d5] to-gray-100">
      <div className="flex items-center gap-x-2 py-1 px-2">
        <HiMapPin />
        <span className="text-sm font-medium">Mumbai</span>
      </div>
      <div className="flex gap-x-8">
        <span className="cursor-pointer rounded-md py-1 px-2 text-sm font-medium hover:bg-gray-100 hover:backdrop-blur-md">
          Best seller
        </span>
        <span className="cursor-pointer rounded-md py-1 px-2 text-sm font-medium hover:bg-gray-100">
          New Releases
        </span>
        <span className="cursor-pointer rounded-md py-1 px-2 text-sm font-medium hover:bg-gray-100">
          Books
        </span>
      </div>
      <span className="cursor-pointer rounded-md py-1 px-2 text-sm font-medium hover:bg-gray-100">
        Becoma a seller
      </span>
    </div>
  );
};

export default SubNavbar;
