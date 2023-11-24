"use client";
import React, { ElementRef, Ref, RefObject, useRef } from "react";
import {
  FiArrowDown,
  FiInstagram,
  FiSearch,
  FiShoppingBag,
} from "react-icons/fi";
import { FaRegUser, FaTiktok, FaTwitter } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import TopBanner from "./top-banner";
const Navbar = () => {
  const brandDropdownRef = useRef<ElementRef<"div">>(null);
  const shopDropdownRef = useRef<ElementRef<"div">>(null);
  const rightNavIcons = [
    FaTwitter,
    FaTiktok,
    FiInstagram,
    FaRegUser,
    FiSearch,
    FiShoppingBag,
  ];

  const brandDropdown = [
    "allbrands",
    "$hosky",
    "bitfins",
    "cardano stonerz club",
    "cryptarogarries",
    "danketsu",
    "future fest",
    "pendulum",
    "vudu brigada",
  ];

  const shopDrowDownOne = [
    "unisex hoodies",
    "unisex zip hoodies",
    "unisex sweatshirts",
    "unisex tees",
    "women's taks",
    "unisex tanks",
  ];

  const shopDropDownTwo = ["phone cases", "frame posters", "posters"];

  const handleMouseOver = (ref: RefObject<HTMLDivElement>) => {
    if (ref && ref.current) {
      ref.current.style.display = "flex";
    }
  };
  const handleMouseLeave = (ref: RefObject<HTMLDivElement>) => {
    if (ref && ref.current) {
      ref.current.style.display = "none";
    }
  };

  return (
    <>
      <TopBanner />
      <div className="z-50 bg-neutral-800 w-full h-[12vh] m-0 p-0 flex items-center justify-between px-12 fixed  ">
        <div className="flex items-center gap-8 text-white font-semibold text-muted-foreground text-xl">
          <div
            className="relative py-8"
            onMouseLeave={() => {
              handleMouseLeave(brandDropdownRef);
            }}
          >
            <p
              onMouseOver={() => {
                handleMouseOver(brandDropdownRef);
              }}
              className="flex items-center gap-[4] pb-[3px] hover:text-[#f8d878] hover:border-b-[#f8d878] hover:border-b-[1px] cursor-pointer transition duration-800"
            >
              brand <RiArrowDropDownLine className="text-[34px]" />
            </p>
            <div
              onMouseLeave={() => {
                handleMouseLeave(brandDropdownRef);
              }}
              ref={brandDropdownRef}
              className="absolute  hidden flex-col gap-2 w-[max-content] bg-[#323232] text-white p-8 top-[10vh]  "
            >
              {brandDropdown.map((item, idx) => (
                <p
                  key={idx}
                  className="text-white hover:text-[#f8d878] cursor-pointer"
                >
                  {item}{" "}
                </p>
              ))}
            </div>
          </div>
          <div
            onMouseLeave={() => {
              handleMouseLeave(shopDropdownRef);
            }}
            className="py-8"
          >
            <p
              onMouseOver={() => {
                handleMouseOver(shopDropdownRef);
              }}
              className=" flex items-center  pb-[3px] hover:text-[#f8d878] hover:border-b-[#f8d878] hover:border-b-[1px] cursor-pointer transition duration-800 "
            >
              shop <RiArrowDropDownLine className="text-[34px]" />
            </p>
            <div
              ref={shopDropdownRef}
              className="hidden w-full bg-[#323232] absolute top-[12vh]  left-0  text-white "
            >
              <div
                onMouseLeave={() => {
                  handleMouseLeave(shopDropdownRef);
                }}
                className="w-[70%] flex items-start justify-around h-[50vh] pt-[4vh]"
              >
                <div>
                  <h3 className="font-bold text-[25px] py-4">apparel</h3>

                  {shopDrowDownOne.map((item, idx) => (
                    <p
                      key={idx}
                      className="font-medium py-2 text-white hover:text-[#f8d878] cursor-pointer"
                    >
                      {item}
                    </p>
                  ))}
                </div>
                <div>
                  <h3 className="font-bold text-[25px] py-4">home</h3>
                  {shopDropDownTwo.map((item, idx) => (
                    <p
                      key={idx}
                      className="py-2 font-medium text-white hover:text-[#f8d878] cursor-pointer"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="pb-[3px] hover:text-[#f8d878] hover:border-b-[#f8d878] hover:border-b-[1px] cursor-pointer transition duration-500">
            premium
          </p>
          <p className="pb-[3px] hover:text-[#f8d878] hover:border-b-[#f8d878] hover:border-b-[1px] cursor-pointer transition duration-500">
            git cards
          </p>
          tT
        </div>
        <div className="ml-[8rem]">
          <img src="/logo.webp" alt="" className="h-[10vh]" />
        </div>
        <div className="text-white font-semibold text-xl flex items-center gap-8">
          <div>
            <p className="pb-[3px] hover:text-[#f8d878] hover:border-b-[#f8d878] hover:border-b-[1px] cursor-pointer transition duration-500  ">
              become an affiliate
            </p>
          </div>
          {rightNavIcons.map((Icon, idx) => (
            <div
              key={idx}
              className="hover:text-[#f8d878] cursor-pointer transition duration-500"
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
