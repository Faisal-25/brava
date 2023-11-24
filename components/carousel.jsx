"use client";
import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { RxDotFilled } from "react-icons/rx";
import "./carousel.css";

function Carousel() {
  const slides = [
    {
      url: "/car-1.jpeg",
      text: "Vintage Hoodies",
      right: true,
    },
    {
      url: "/car-2.jpeg",
      text: "Premimium Tees",
    },
    {
      url: "/car-3.jpeg",
      text: "Vintage pants",
      right: true,
    },

    {
      url: "/car-4.jpeg",
      text: "Premimium Jackets",
    },
    {
      url: "/car-5.jpeg",
      text: " Unique Pants",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    let id = setTimeout(() => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }, 5000);

    return () => {
      clearTimeout(id);
    };
  }, [currentIndex, slides.length]);

  return (
    <div className="mt-[12vh] h-[90vh] w-full m-auto  relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full  bg-center bg-cover duration-500  bg-img"
      ></div>
      <div
        className={`w-[15%] text-white  absolute top-[30vh] opacity-100 containerFont ${
          slides[currentIndex].right ? "right-[6rem]" : "left-[3rem]"
        }`}
      >
        <h1 className=" text-[70px]">{slides[currentIndex].text}</h1>
        <button className=" bg-white rounded-[3rem] py-6 px-8 text-black mt-[1rem] hover:bg-neutral-800 hover:text-white">
          Shop now
        </button>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[70%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FiArrowLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[70%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FiArrowRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}

export default Carousel;
