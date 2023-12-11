import React, { useState, useEffect } from "react";
import { carouselData } from "../../data.js";
import CarouselDiv from "./CarouselDiv";
console.log(carouselData);

const Carousel = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => {
      if (prev === carouselData.length - 1) {
        return (prev = 0);
      }
      return prev + 1;
    });
  };

  const decrement = () => {
    setCount((prev) => {
      if (prev > 0) {
        return (prev = carouselData.length - 1);
      }
      return prev - 1;
    });
  };

    useEffect(() => {
      const intervalId = setTimeout(() => {
        increment();
      }, 20000);

      // Clean up the Timeout when the component unmounts
      return () => clearTimeout(intervalId);
    }, [count]); // Empty dependency array ensures that the effect runs only once, similar to componentDidMount

  const carousel = carouselData.map((datum) => (
    <CarouselDiv key={datum.id} {...datum} />
  ));

  return (
    <div>
      {carousel[count]}
    </div>
  );
};

export default Carousel;
