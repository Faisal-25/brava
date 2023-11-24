import React, { useEffect, useState } from "react";

const TopBanner = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      window.removeEventListener("scroll", handleScroll);
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={` w-full bg-[#e6be4b] h-[5vh] font-semibold text-neutral-900 text-muted-foreground flex items-center justify-center ${
        isScrolled && "translate-y-[-100%]"
      } ${isScrolled && "hidden"} `}
    >
      VISIT US AT TIKTOK @BRAVALAND.COM
    </div>
  );
};

export default TopBanner;
