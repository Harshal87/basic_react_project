import React, { useState } from "react";
import ExpenseItems from "./ExpenseItem";
import { useEffect } from "react";
import Expensefilter from "../New Expense/Expensefilter";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
  const obj1 = props.obj1;
  console.log("Expenses ", obj1);
  let NewYear = "2023";

  const [userYear, setuseryear] = useState(NewYear);

  // const[data,setData]=useState(props.obj1)

  const filterDataHandler = (useryear) => {
    console.log("befire st ", userYear);
    setuseryear(useryear);
  };

  const filteredExpenses = obj1.filter(
    (obj) => obj.date.getFullYear() == userYear
  );

  let ExpenseContent = <p>Add New Elements</p>;

  if (filteredExpenses.length > 0) {
    ExpenseContent = filteredExpenses.map((obj, index) => (
      <ExpenseItems
        filteredExpenses={filteredExpenses}
        key={Math.random().toString()}
        date={obj.date}
        item={obj.item}
        cost={"$" + obj.cost}
      />
    ));
  }

  return (
    <div className="box">
      <Expensefilter filterDataHandler={filterDataHandler}></Expensefilter>
      <ExpenseChart filteredData={filteredExpenses}></ExpenseChart>
      {ExpenseContent}
    </div>
  );
};

export default Expenses;
