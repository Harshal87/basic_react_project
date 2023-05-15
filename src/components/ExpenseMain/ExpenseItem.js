import "../ExpenseMain/ExpenseItem.css";

import ExpenseDate from "../ExpenseMain/ExpenseDate";
import { useState } from "react";
const ExpenseItems = (props) => {
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const year = props.date.getFullYear();
  // const item_cot=10;
  // const date=props.date

  const [title, setTitle] = useState(props.item);
  const updateItem = () => {
    setTitle(props.item);
  };
  const [cost, setCost] = useState(props.cost);

  const updateCost = () => {
    setCost(props.cost);
  };

  console.log("main ", props.obj1);
  return (
    <div className="expense-item">
      {/* <h3>{props.date.toISOString()}</h3> */}

      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.item}</h2>

        <div className="expense-item__price">{props.cost}</div>
        <button onClick={updateItem}>Update Item</button>
        <button onClick={updateCost}>Update Cost</button>

        {props.filteredExpenses.length === 1 && (
          <h3>Only single Expense here. Please add more...</h3>
        )}
      </div>
    </div>
  );
};

export default ExpenseItems;
