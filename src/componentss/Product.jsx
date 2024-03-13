import React from "react";
import img1 from "../assetss/img/room1.jpg";
import img2 from "../assetss/img/room2.jpg";
import img3 from "../assetss/img/room10.jpg";
import img4 from "../assetss/img/room11.jpg";

import img5 from "../assetss/img/room6.jpg";
import img6 from "../assetss/img/room11.jpg";
import img7 from "../assetss/img/room6.jpg";
import ProductCard from "../layouts/ProductCard";

const Product = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
        Inspiration for home interior designs
      </h1>

      <div className=" flex flex-col lg:flex-row gap-12 justify-center">
        <ProductCard img={img1} title="Name" />
        <ProductCard img={img2} title="Name" />
        <ProductCard img={img3} title="Name" />
        <ProductCard img={img2} title="Name" />
      </div>
      <div className=" flex flex-col lg:flex-row gap-12 justify-center pt-[2%]">
        <ProductCard img={img5} title="Name" />
        <ProductCard img={img6} title="Name" />
        <ProductCard img={img7} title="Name" />
        <ProductCard img={img2} title="Name" />
      </div>
      <div className=" flex flex-col lg:flex-row gap-12 justify-center pt-[2%]">
        <ProductCard img={img1} title="Name" />
        <ProductCard img={img2} title="Name" />
        <ProductCard img={img3} title="Name" />
        <ProductCard img={img2} title="Name" />
      </div>
    </div>
  );
};

export default Product;
