import React from "react";
import "./Tube.css";

const Tube = ({ fillPercentage }) => {
  return (
    <div className="tube-container">
      <div className="tube">
        <div className="fill" style={{ height: `${fillPercentage}%` }}></div>
      </div>
    </div>
  );
};

export default Tube;
