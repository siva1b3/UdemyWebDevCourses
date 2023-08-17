import ExpenseItem from "./ExpenseItems";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <>
      <h2>Let's get started!</h2>
      {/* sending all data in variable */}
      <div className="expenses">
        <ExpenseItem details={props.expensesdetails[0]}></ExpenseItem>
        <ExpenseItem details={props.expensesdetails[1]}></ExpenseItem>
        <ExpenseItem details={props.expensesdetails[2]} />
        <ExpenseItem details={props.expensesdetails[3]} />
      </div>
    </>
  );
};

export default Expenses;
