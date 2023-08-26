import React from "react";

function ClosedForm(props) {
  return (
    <div className="new-expense__actions" style={{ textAlign: "center" }}>
      <button type="submit" onClick={props.openForm}>
        Add New Expense
      </button>
    </div>
  );
}

export default ClosedForm;
