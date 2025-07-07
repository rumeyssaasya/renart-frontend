import React from "react";

interface StarRatingProps {
  rating: number;
  maxStars?: number; 
}

const Star = ({ fillPercentage }: { fillPercentage: number }) => {
  return (
    <div
      style={{
        position: "relative",
        width: 24,
        height: 24,
        display: "inline-block",
      }}
    >
      
      <svg
        viewBox="0 0 24 24"
        fill="#D9D9D9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="20"
        height="20"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
      </svg>

      
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${fillPercentage}%`, 
          height: "100%",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="#F6D5A8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="20"
          height="20"
        >
          <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
        </svg>
      </div>
    </div>
  );
};


const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  const stars = [];

  for (let i = 0; i < maxStars; i++) {
    let fill = 0;
    if (rating >= i + 1) fill = 100;
    else if (rating > i) fill = (rating - i) * 100;
    else fill = 0;

    stars.push(<Star key={i} fillPercentage={fill} />);
  }

  return <div>{stars}</div>;
};

export default StarRating;
