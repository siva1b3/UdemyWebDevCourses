import ExpenseItem from "./ExpenseItems";
import "./Expenses.css";

const Expenses = (props) => {
  const ExpenseItem0 = (
    <ExpenseItem details={props.expensesdetails[0]}></ExpenseItem>
  );
  const ExpenseItem1 = (
    <ExpenseItem details={props.expensesdetails[1]}></ExpenseItem>
  );
  const ExpenseItem2 = <ExpenseItem details={props.expensesdetails[2]} />;
  const ExpenseItem3 = <ExpenseItem details={props.expensesdetails[3]} />;

  const ExpenseItemArray = [ExpenseItem0, ExpenseItem1];
  const ExpenseItemObject = {
    ExpenseItem2: ExpenseItem2,
    ExpenseItem3: ExpenseItem3
  };
  // objects are not valiid as JSX

  return (
    <>
      <h2>Let's get started!</h2>
      {/* sending all data in variable */}
      <div className="expenses">
        {ExpenseItem0}
        {ExpenseItem1}
        {ExpenseItem2}
        {ExpenseItem3}

        <h1 style={{ color: "red", lineHeight: 2, padding: 5 }}>
          using arrays
        </h1>
        {ExpenseItemArray}

        <h1 style={{ color: "red", lineHeight: 2, padding: 5 }}>
          using Objects
        </h1>
        {/* {ExpenseItemObject} */}
        {/* we cannot use objects like arrays in jsx */}
        {ExpenseItemObject.ExpenseItem2}
        {ExpenseItemObject.ExpenseItem3}
      </div>
    </>
  );
};

export default Expenses;
