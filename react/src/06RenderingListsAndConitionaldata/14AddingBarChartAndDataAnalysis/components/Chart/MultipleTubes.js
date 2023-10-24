import React from "react";
import Tube from "./Tube";
import "./MultipleTubes.css";

const MultipleTubes = () => {
  const tubesData = [];

  for (let id = 1; id <= 12; id++) {
    const fillPercentage = Math.floor(Math.random() * 60) + 20;
    // Generate a random fill percentage between 1 and 100
    tubesData.push({ id, fillPercentage });
  }

  return (
    <div className="multiple-tubes-container">
      {tubesData.map((tube) => (
        <Tube key={tube.id} fillPercentage={tube.fillPercentage} />
      ))}
    </div>
  );
};

export default MultipleTubes;
