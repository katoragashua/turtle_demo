import React from "react";

const Btn = ({ text, style }) => {
  return (
    <a href="">
      <span className="btn" style={style}>
        {text}
      </span>
    </a>
  );
};

export default Btn;
