import "../000Components/ExpenseItem.css";
import DateComponent from "./ExpenseItem/Datecomponent";
import ExpensePriceComponent from "./ExpenseItem/ExpensePriceComponent";
import ExpenseTitleComponent from "./ExpenseItem/ExpenseTitleComponent";

function ExpenceItem_withbootstrap() {
  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="col-6">July 28 2023</h1>
        <div className="col-6">
          <h2>Car Insurance</h2>
          <div>$234</div>
        </div>
      </div>
    </div>
  );
}

const ExpenceItem = (props) => {
  //   const expenceDate = new Date(2023, 7, 28);
  //   const expenseTitle = "Car Insurance";
  //   const expensePrice = 234.5;
  // console.log("hi");
  // console.log(props.date);
  // console.log(typeof props.date);
  const expenceDate = props.date;
  const expenseTitle = props.title;
  const expensePrice = props.price;

  //   Convert expenseDate to a string representation
  const formattedDate = expenceDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  });

  //   const formattedDate = expenceDate.toISOString();

  return (
    <div className="expense-item">
      <DateComponent formattedDate={formattedDate} />
      <div className="expense-item__description">
        <ExpenseTitleComponent expenseTitle={expenseTitle} />
        <div className="expense-item__price">
          <ExpensePriceComponent expensePrice={expensePrice} />
        </div>
      </div>
    </div>
  );
};

export default ExpenceItem;
