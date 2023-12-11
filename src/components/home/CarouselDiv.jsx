import React from 'react'

const CarouselDiv = ({img, title, details}) => {
  return (
    <div className="flex flex-col gap-12 xl:flex-row xl:gap-20 text-gray-600]">
      <div
        className="legend flex flex-col gap-8 xl:max-w-md xl:items-start"
        data-aos="zoom-out"
      >
        <h3>{title}</h3>
        <p>{details}</p>
        <button className="py-3 px-8 font-semibold rounded-[30px] text-white bg-[teal]">
          Read more...
        </button>
      </div>
      <div className="photo" data-aos="zoom-out">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default CarouselDiv