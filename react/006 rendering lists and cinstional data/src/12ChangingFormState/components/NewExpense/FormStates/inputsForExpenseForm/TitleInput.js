import React from "react";

const TitleInput = (props) => {
  return (
    <div className="new-expense__control">
      <label>Title</label>
      <input type="text" value={props.value} onChange={props.onChange} />
    </div>
  );
};

export default TitleInput;
