import ExpenseItem from "./ExpenseItems";
import "./Expenses.css";

const Expenses = (props) => {
  const ExpenseItemAggregate = [];

  for (let i = 0; i < props.expensesdetails.length; i++) {
    ExpenseItemAggregate.push(
      <ExpenseItem details={props.expensesdetails[i]}></ExpenseItem>
    );
  }

  return (
    <>
      <h2>Let's get started!</h2>
      {/* sending all data in variable */}
      <div className="expenses">{ExpenseItemAggregate}</div>
    </>
  );
};

export default Expenses;
