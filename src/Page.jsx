import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import HeroCard from "./components/HeroCard/HeroCard.jsx";
// import BgVideo from "./assets/production_id_3773486 (1080p).mp4";
import wave from "./assets/wave Gif.gif";
import Rapidscat from "./components/Rapidscat/Rapidscat.jsx";
import Satelite from "./components/Satelite/Satelite.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Footer5 from "./components/Footer/Footer5.jsx";
import List from "./components/list/List.jsx";
import Bathroom from "./components/knowledge/Bathroom.jsx";
import Kitchen from "./components/kitchen/Kitchen.jsx";
import Living from "./components/living/Living.jsx";
import Advetrisement from "./components/asvetrisement/Advetrisement.jsx";
import Newroom from "./components/newroom/Newroom.jsx";
import Estimate from "./components/estimate/Estimate.jsx";
import Design from "./components/designs/Design.jsx";

import Navbars from "./componentss/Navbar.jsx";
import Home from "./componentss/Home.jsx";
import Menu from "./componentss/Menu.jsx";
import About from "./componentss/About.jsx";
import Product from "./componentss/Product.jsx";
import Review from "./componentss/Review.jsx";
import Footers from "./componentss/Footer.jsx";

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Heros from "./newcomponents/Hero";
import NewestDeals from "./newcomponents/NewestDeals";
import AboutUs from "./newcomponents/AboutUs";
import BestDeals from "./newcomponents/BestDeals";
import Foot from "./newcomponents/Footer";

import Banner from "./components3/Banner/Banner.jsx";
import AppStore from "./components3/AppStore/AppStore.jsx";
import Testimonials from "./components3/Testimonials/Testimonials.jsx";
import Company from "./components/company/Company.jsx";
import Agent from "./components/agent/Agent.jsx";
import Inspiration from "./components/inspiration/Inspiration.jsx";

// import AOS from "aos";
// import "aos/dist/aos.css";

const App = () => {
  // React.useEffect(() => {
  //   AOS.init({
  //     duration: 1200,
  //     easing: "ease-in-out",
  //   });
  // });
  return (
    <div className="">
      {/* <video
          autoPlay
          loop
          muted
          className="relative right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video> */}

      {/* <Navbar /> */}
      <Navbars />
      <main>
        <div id="home">
          <Home />
        </div>

        <div id="menu">
          <Menu />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="products">
          <Product />
        </div>
        <div id="living">
          <Living />
        </div>
        <div id="kitchen">
          <Kitchen />
        </div>
        <div id="bathroom">
          <Bathroom />
        </div>

        <div id="newdeals">
          <NewestDeals />
        </div>

        <div id="bestdeals">
          <BestDeals />
        </div>

        <div id="aboutus">
          <AboutUs />
        </div>

        <div>
          <Agent />
        </div>

        {/* <div id="rapidscat">
          <Rapidscat />
        </div> */}

        <div id="inspiration">
          <Inspiration />
        </div>
        <div>
          <Design />
        </div>

        <div>
          <Company />
        </div>

        <div>
          <Advetrisement />
        </div>

        <div id="review">
          <Review />
        </div>
      </main>
      <Footers />
      <Foot />
    </div>
  );
};

export default App;
