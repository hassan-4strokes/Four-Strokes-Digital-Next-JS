import React, { useState } from "react";

const LocationsCard = ({ location, index, hoveredIndex, setHoveredIndex }) => {
  const [indexNumber, setIndexNumber] = useState(null);

  const handleHovering = (index) => {
    setIndexNumber(index);
    setHoveredIndex(index);
  };

  const handleCancelHovering = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div
      key={index}
      onMouseEnter={() => handleHovering(index)}
      onMouseLeave={() => handleCancelHovering(index)}
      className={`card ${
        hoveredIndex === index || (hoveredIndex === null && index === 4)
          ? "w-full xl:w-[25%]"
          : "w-full xl:w-[12.5%]"
      } transition-all duration-300 ease-in-out rounded-2xl overflow-hidden relative`}
    >
      <a href={location.link}>
        <img
          src={location.image}
          alt="Location Image"
          className="w-full h-[30vh] 2xl:h-[40vh] object-cover"
        />
        <span
          className={`text-area absolute bottom-5 left-5 xl:left-2 text-lg xl:text-base 2xl:text-lg ${
            hoveredIndex === index || (hoveredIndex === null && index === 4)
              ? "opacity-1 xl:opacity-1"
              : "opacity-1 xl:opacity-0"
          } transition-all duration-300 ease-in-out text-white`}
        >
          {location.location}
        </span>
      </a>
    </div>
  );
};

export default LocationsCard;
