import React from "react";
import "./card.css"


const Card = ({ title, children }) => {
  return (
<div className="container">
      <div>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default Card;
