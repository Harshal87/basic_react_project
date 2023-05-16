import { useState } from "react";
import "./ExpenseForm.css";
import ExpenseItems from "../ExpenseMain/ExpenseItem";
import NewExpense from "./NewExpense";
import Expensefilter from "./Expensefilter";

const ExpenseForm = (props) => {
  let eventhandler;
  //     const [title,settitle]=useState("")
  // const [amount,setamount]=useState("")
  // const [date,setdate]=useState("")

  // User Input handler using UseState

  const [UserInput, SetUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleHandler = (event) => {
    SetUserInput({
      ...UserInput,
      enteredTitle: event.target.value,
    });
  };

  const amountHandler = (event) => {
    SetUserInput({
      ...UserInput,
      enteredAmount: event.target.value,
    });
  };
  const dateHandler = (event) => {
    SetUserInput({
      ...UserInput,
      enteredDate: event.target.value,
    });
  };

  // Form Click Event Handler funciton
  const FormclickHandler = (event) => {
    props.setaddexpenseclick(false)
    eventhandler = event;
    event.preventDefault();
    const obj1 = {
      item: UserInput.enteredTitle,
      date: new Date(UserInput.enteredDate.split("-")),
      cost: UserInput.enteredAmount,
    };
    // item:event.target.parentNode.children[1].value,
    // date:event.target.parentNode.children[5].value.split("-"),
    // cost:event.target.parentNode.children[3].value

    console.log("Data is ", obj1);
    props.logDataHandler(obj1);
    // props
    // return(
    //     <ExpenseItems
    //     item={item}
    //     date={date}
    //     cost={cost}
    //     />
    // )
    SetUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  const cancelbtn=()=>{
    props.setaddexpenseclick(false)
  }
  return (
 
    <div className="form-control">
      <form action="#">
        <label htmlFor="title"> Expense Title</label>
        <input
          type="text"
          value={UserInput.enteredTitle}
          onChange={titleHandler}
          name="title"
        />
        <label htmlFor="amount"> Expense Amount</label>
        <input
          type="number"
          value={UserInput.enteredAmount}
          onChange={amountHandler}
          name="amount"
        />
        <label htmlFor="date"> Expense Date</label>
        <input
          type="date"
          value={UserInput.enteredDate}
          onChange={dateHandler}
          name="date"
        />
        <button type="submit" value="Submit" onClick={FormclickHandler} >Add Expense Item</button>
        <button onClick={cancelbtn}>Cancel</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
