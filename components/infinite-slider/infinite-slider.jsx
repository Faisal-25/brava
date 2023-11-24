import React from "react";
import "./infinite-slider.scss";

const InfiniteSlider = () => {
  const items = [
    {
      img: "/if1.jpeg",
      text: "Datsunki",
      color: "#a252d0",
    },
    {
      img: "/if2.jpeg",
      text: "Datsunki",
      color: "#091f2c",
    },
    {
      img: "/if3.jpeg",
      text: "$hosky",
      color: "#ffb070",
    },
    {
      img: "/if4.jpeg",
      text: "Tees",
      color: "#a65703",
    },
    {
      img: "/if5.jpeg",
      text: "Hyushki",
      color: "black",
    },
    {
      img: "/if6.jpeg",
      text: "Datsunki",
      color: "black",
    },
  ];
  const w = "8rem";
  return (
    <div class="slider mt-[2rem]">
      <div class="slide-track">
        {items.map((item) => {
          return (
            <div
              className={`slide flex justify-between  items-center  text-white rounded-[1rem] rounded-l-[8rem]  `}
              style={{ backgroundColor: item.color }}
              key={item.img}
            >
              <div>
                {" "}
                <img
                  src={item.img}
                  className="block w-44 h-44 rounded-[50%] "
                />
              </div>
              <div>
                <h1 className="pr-[1rem] text-[34px] font-bold">{item.text}</h1>
                <button className="border-none underline text-[22px]">
                  shop now
                </button>
              </div>
            </div>
          );
        })}
        {items.map((item) => {
          return (
            <div
              className={`slide flex justify-between  items-center  text-white rounded-[1rem] rounded-l-[${w}] bg-[${item.color}] `}
              style={{ backgroundColor: item.color }}
              key={item.img}
            >
              <div>
                {" "}
                <img src={item.img} className="w-44 h-44 rounded-[50%] " />
              </div>
              <div>
                <h1 className="pr-[1rem] text-[34px] font-bold">{item.text}</h1>
                <button className="border-none underline text-[22px]">
                  shop now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteSlider;
