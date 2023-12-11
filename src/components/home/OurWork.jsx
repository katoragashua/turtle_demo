import React from 'react'
import SectionHead from "./SectionHead";
import MyCarousel from "./MyCarousel";
import Carousel from "./Carousel";


const OurWork = () => {
  return (
    <section className="our-work h-full">
      <SectionHead text={"Our work"} bg="teal" />
      <div className="container py-16">
        <Carousel/>
      </div>
    </section>
  );
}

export default OurWork