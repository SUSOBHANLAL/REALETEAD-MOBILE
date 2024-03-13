import React from "react";
import img1 from "../assetss/img/room1.jpg";
import img2 from "../assetss/img/room2.jpg";
import img3 from "../assetss/img/room3.jpg";
import img4 from "../assetss/img/room4.jpg";
import img5 from "../assetss/img/room5.jpg";
import img6 from "../assetss/img/room6.jpg";
import MenuCard from "../layouts/MenuCard";

const Menu = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl mt-24 mb-8 px-[8%]">
        One-stop shop for all things interiors
      </h1>

      <div className=" flex flex-wrap pb-8 gap-8 justify-center">
        <MenuCard img={img1} title="contemporary" />
        <MenuCard img={img2} title="traditional classic" />
        <MenuCard img={img3} title="Rustic" />
        <MenuCard img={img4} title="scandinavian" />
        <MenuCard img={img5} title="industrial" />
        <MenuCard img={img6} title="living room" />
      </div>
    </div>
  );
};

export default Menu;
