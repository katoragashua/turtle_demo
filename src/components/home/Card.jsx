import React from "react";

const Card = ({ id, title, details, img }) => {
  const [more, setMore] = React.useState(() => false);

  const readMore = () => setMore((prev) => !prev);
  console.log(more);

  return (
    <div
      className="card flex flex-col gap-4 bg-white rounded-md text-gray-600"
      data-aos="fade-up"
    >
      <h4 className="card-title text-[#26890d] font-bold">{title}</h4>
      <div className="card-details">
        {more ? details : details.split(" ").slice(0, 30).join(" ")}{" "}
        {
          <p style={{ color: "#26890d", cursor: "pointer" }} onClick={readMore}>
            {!more ? "Read more..." : "less..."}
          </p>
        }
      </div>
      <div className="overflow-hidden">
        <img
          src={img}
          alt=""
          className="card-img hover:scale-[1.1] ease-linear duration-500 rounded-md"
        />
      </div>
    </div>
  );
};

export default Card;
