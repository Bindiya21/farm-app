import React from "react";
import HeroCarousel from "./CommonComponent/HeroCarousel/HeroCarousel";
import Carousel from "./CommonComponent/HeroCarousel/ProductCarousel";
// import "../../../../styles/second.scss";

const Main = () => (
    <main>
      <section className="hero">
        <HeroCarousel/>
      </section>
      <section className="products">
        <Carousel/>
      </section>
    </main>
  );

  export default Main;