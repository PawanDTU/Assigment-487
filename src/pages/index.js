import Content from "@/components/Content";
import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="w-screen h-screen border-2 border-black">
        <Header />
        <div className="w-full h-fit flex justify-evenly items-center mt-5">
          <ImageSlider />
          <Content />
        </div>
      </div>
    </>
  );
};

export default Home;
