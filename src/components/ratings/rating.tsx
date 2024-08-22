import React, { useState } from "react";
import "./ratings.css";

const Rating = ({ maxRating = 5 }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (index: number) => {
    setRating(index + 1);
  };

  return (
    <div className="mb-4">
      <div className="flex items-center pb-1">
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.56663 0.915567C8.72675 0.530586 9.27212 0.530586 9.43224 0.915567L11.2039 5.17511C11.2714 5.33741 11.424 5.4483 11.5992 5.46235L16.1978 5.83101C16.6134 5.86433 16.7819 6.38301 16.4653 6.65426L12.9617 9.65547C12.8282 9.76982 12.7699 9.94925 12.8106 10.1202L13.8811 14.6076C13.9778 15.0132 13.5366 15.3338 13.1808 15.1164L9.24377 12.7117C9.09376 12.6201 8.9051 12.6201 8.7551 12.7117L4.8181 15.1164C4.46228 15.3338 4.02106 15.0132 4.11781 14.6076L5.18822 10.1202C5.229 9.94925 5.1707 9.76982 5.03721 9.65547L1.53361 6.65426C1.21695 6.38301 1.38548 5.86433 1.80109 5.83101L6.39963 5.46235C6.57485 5.4483 6.72748 5.33741 6.79498 5.17511L8.56663 0.915567Z"
            stroke="#999999"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[#999999] ml-1 text-lg">Đánh giá</span>
      </div>
      <div className="flex">
        {[...Array(maxRating)].map((_, index) => (
          <svg
            key={index}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={index < rating ? "red" : "gray"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => handleClick(index)}
            className="cursor-pointer"
          >
            <path d="M12 .587l3.668 7.431L24 9.256l-6 5.84 1.417 8.274L12 18.896l-7.417 3.895L6 15.096l-6-5.84 8.332-1.238z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default Rating;
