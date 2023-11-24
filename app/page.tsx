import Carousel from "@/components/carousel";

import Navbar from "@/components/navbar";
import InfiniteSlider from "@/components/infinite-slider/infinite-slider";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <InfiniteSlider />
    </div>
  );
}
