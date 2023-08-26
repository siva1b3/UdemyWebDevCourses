import React, { useState } from "react";
import OpenFormExpanded from "./FormStates/OpenFrom";
import ClosedForm from "./FormStates/ClosedFrom";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [formComponentState, setFormComponentState] = useState("close");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    closeForm();
  };

  const resetForm = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const openForm = () => {
    formStateHandler("open");
  };

  const closeForm = () => {
    resetForm();
    formStateHandler("close");
  };

  const expandedForm = (
    <OpenFormExpanded
      submitHandler={submitHandler}
      enteredTitle={enteredTitle}
      titleChangeHandler={titleChangeHandler}
      enteredAmount={enteredAmount}
      amountChangeHandler={amountChangeHandler}
      enteredDate={enteredDate}
      dateChangeHandler={dateChangeHandler}
      closeForm={closeForm}
    />
  );

  const AddNewExpenseButton = <ClosedForm openForm={openForm} />;

  function formStateHandler(state) {
    setFormComponentState(state);
  }

  const finalForm =
    formComponentState === "close" ? AddNewExpenseButton : expandedForm;

  return <>{finalForm}</>;
};

export default ExpenseForm;
