import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import learning from "../../assets/images/learning.jpg";
import goal from "../../assets/images/goal.jpg";
import excellence from "../../assets/images/excellence.jpg";
import integrity from "../../assets/images/integrity.jpg";


const MyCarousel = () => {
  return (
    <div className="xl:w-1/2 my-0 mx-auto py-16">
      <Carousel>
        <div className="flex ">
          <img src={learning} />
          <p className="legend">
            At Turtle, we KNOW that change happens every day that is why we
            provide our clients with advanced training and knowledge using more
            modern methods of instruction. These seminar inspire additional
            strategies for implementing cutting-edge tools and techniques to
            assist professionals in receiving the most current and sophisticated
            training in their specialized fields since Learning is a
            never-ending journey with no end in sight. When provide our clients
            with solutions and training programs, we keep this in mind and make
            sure that the classes and programs are challenging, competitive, and
            impact everything new to aid their learning. Every course is
            periodically reviewed and updated to reflect new market concepts,
            techniques, dynamics, etc. Our course material should make it easier
            for our clients to be competitive.
          </p>
        </div>
        <div>
          <img src={goal} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={excellence} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default MyCarousel