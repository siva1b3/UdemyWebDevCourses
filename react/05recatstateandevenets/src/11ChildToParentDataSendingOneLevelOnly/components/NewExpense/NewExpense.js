import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
  let expenseDataFromChild = undefined;

  // ! create a Function in parent componet that will recive data from child
  // * parent componet function will be sent to child as function object
  // ^ in props to Recive Data From Child
  function ReciveDataFromChild(DataFromChild) {
    expenseDataFromChild = {
      ...DataFromChild,
    };
    console.table(expenseDataFromChild);
  }

  return (
    <div className="new-expense">
      <ExpenseForm SendDataToParent={ReciveDataFromChild} />
    </div>
  );
};

export default NewExpense;
