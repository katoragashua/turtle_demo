import React, {useEffect, useState} from 'react'

const SectionHead = ({text, bg}) => {

  return (
    <div
      className="section-head h-16 p-4 flex justify-start items-center text-white font-bold sticky top-0 z-20"
      style={{ backgroundColor: bg }}
    >
      <div className="container">
        <h4>{text}</h4>
      </div>
    </div>
  );
}

export default SectionHead