import "../ExpenseMain/ExpenseItem.css";

import ExpenseDate from "../ExpenseMain/ExpenseDate";
import { useState } from "react";
const ExpenseItems = (props) => {
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const year = props.date.getFullYear();
  // const item_cot=10;
  // const date=props.date

  const [title,setTitle]=useState(props.item)
  const updateItem=()=>{
    setTitle("Updated")
  }
const [cost,setCost]=useState(props.cost)

const updateCost=()=>{
  setCost("$100")
}
  

  console.log("main ",props.obj1)
  return (

    <div className="expense-item">
      {/* <h3>{props.date.toISOString()}</h3> */}

      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>

        <h3>{props.place}</h3>

        <div className="expense-item__price">{cost}</div>
        <button onClick={updateItem}>Update Item</button>
        <button onClick={updateCost}>Update Cost</button>
      </div>
    </div>
  );
};

export default ExpenseItems;
