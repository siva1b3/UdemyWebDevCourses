import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  let expenseDataFromChild = undefined;

  // ! create a Function in parent componet that will recive data from child
  // * parent componet function will be sent to child as function object
  // ^ in props to Recive Data From Child
  function ReciveDataFromChild(DataFromChild) {
    expenseDataFromChild = {
      ...DataFromChild,
    };

    // ! sending data to parent which is recived from child
    // ^ while data coming back only this function which received data from
    // * child element only will run again after the parent component was
    // ! rendered so we use only the same function to send the data to its parent
    props.SendDataToParent(expenseDataFromChild);
  }

  return (
    <div className="new-expense">
      <ExpenseForm SendDataToParent={ReciveDataFromChild} />
    </div>
  );
};

export default NewExpense;
