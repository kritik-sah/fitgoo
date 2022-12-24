import { Button, Input } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { HiBars3BottomRight, HiBolt, HiUserCircle } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { toggleNav } from "../../redux/website/Navigation/NavigationSlice";
import SearchBar from "../SearchBar/SearchBar";
import SidebarMenu from "./SidebarMenu";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <nav className=" bg-white w-full flex !sticky top-0 z-10 justify-between items-center mx-auto px-3 md:px-8 h-16 shadow-md">
        {/* logo */}
        <div className="inline-flex">
          <Link className="_o6689fn" href="/">
            <div className="hidden md:block">
              <h2 className="text-3xl font-bold flex gap-2 items-center">
                <HiBolt className="h-30" />
                FitGoo
              </h2>
            </div>
            <div className="block md:hidden">
              <HiBolt className="h-30" />
            </div>
          </Link>
        </div>
        {/* end logo */}
        {/* search bar */}
        <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
          <SearchBar />
        </div>
        {/* end search bar */}
        {/* login */}
        <div className="flex-initial">
          <div className="flex justify-end items-center relative">
            <div className="flex mr-4 items-center">
              <a
                className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full"
                href="#"
              >
                <div className="flex items-center relative cursor-pointer whitespace-nowrap">
                  List your gym
                </div>
              </a>
            </div>
            <div className="block">
              <div className="inline relative">
                <button
                  type="button"
                  className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg"
                  onClick={() => dispatch(toggleNav())}
                >
                  <div className="pl-1">
                    <HiBars3BottomRight className="text-lg" />
                  </div>
                  <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                    <HiUserCircle className="h-10 text-2xl" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end login */}
      </nav>
      <SidebarMenu />
    </>
  );
};

export default Navbar;
