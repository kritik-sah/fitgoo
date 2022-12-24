import React from "react";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

const UserCard = () => {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex gap-2 items-center">
        <div className="mr-4 w-12 h-12 rounded shadow">
          <img
            className="w-full h-full overflow-hidden object-cover object-center rounded"
            src="https://images.unsplash.com/photo-1570211776045-af3a51026f4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
            alt="avatar"
          />
        </div>
        <div>
          <h3 className="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4">
            Andres Berlin
          </h3>
          <p className="text-gray-600 text-xs leading-3">Manager Sales</p>
        </div>
      </div>
      <div className="relative font-normal text-xs sm:text-sm flex items-center text-gray-600">
        <HiArrowRightOnRectangle className="text-2xl" />
      </div>
    </div>
  );
};

export default UserCard;
