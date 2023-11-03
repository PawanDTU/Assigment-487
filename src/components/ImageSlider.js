import React from "react";

const ImageSlider = () => {
  return (
    <>
      <article className="flex">
        <div className="w-[460px] h-[540px] rounded-full border border-black flex justify-center items-center">
          <img
            className="w-[300px] h-[400px] object-contain"
            src="https://decemdrinks.com/cdn/shop/products/SpicedBlend_Serve_1024x1024.png?v=1659602678"
            alt="item"
          />
        </div>
      </article>
    </>
  );
};

export default ImageSlider;
