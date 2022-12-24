import { Input } from "@chakra-ui/react";
import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
  return (
    <div className="block">
      <div className="flex items-center max-w-full">
        <button
          className="flex items-center pl-4 flex-grow-0 flex-shrink relative w-full max-w-sm border rounded-full px-1  py-1"
          type="button"
        >
          <div className="block flex-grow flex-shrink overflow-hidden">
            <Input variant="unstyled" placeholder="Find gym nearby..." />
          </div>
          <div className="flex items-center justify-center relative  h-8 w-8 rounded-full">
            <HiMagnifyingGlass />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
