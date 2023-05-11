import "../ExpenseMain/ExpenseItem.css";

import ExpenseDate from "../ExpenseMain/ExpenseDate";
const ExpenseItems = (props) => {
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const year = props.date.getFullYear();
  // const item_cot=10;
  // const date=props.date

  const DelclickHandler = (event) => {
    alert("Clicked");
    // props.obj1.pop(props.key)
    let element=event.target.parentNode.parentNode
    element.remove()
  };
  console.log("main ",props.obj1)
  return (

    <div className="expense-item">
      {/* <h3>{props.date.toISOString()}</h3> */}

      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.item}</h2>

        <h3>{props.place}</h3>

        <div className="expense-item__price">{props.cost}</div>
        <button onClick={DelclickHandler}>Delete Item</button>
      </div>
    </div>
  );
};

export default ExpenseItems;
