import ExpenseItem from "./ExpenseItems";
import "./Expenses.css";

const Expenses = (props) => {
  const ExpenseItemAggregate = props.expensesdetails.map(
    (dataElementInArray) => {
      return <ExpenseItem details={dataElementInArray} />;
    }
  );

  return (
    <>
      <h2>Let's get started!</h2>
      {/* sending all data in variable */}
      <div className="expenses">{ExpenseItemAggregate}</div>
    </>
  );
};

export default Expenses;
