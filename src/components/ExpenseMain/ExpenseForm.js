import { useState } from "react";
import "./ExpenseForm.css";
import ExpenseItems from "./ExpenseItem";

const ExpenseForm = () => {
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
    // return(
    //     <ExpenseItems
    //     item={item}
    //     date={date}
    //     cost={cost}
    //     />
    // )
  };

  return (
    <div className="form-control">
      <form action="#">
        <label htmlFor="title"> Expense Title</label>
        <input type="text" onChange={titleHandler} name="title" />
        <label htmlFor="amount"> Expense Amount</label>
        <input type="number" onChange={amountHandler} name="amount" />
        <label htmlFor="date"> Expense Date</label>
        <input type="date" onChange={dateHandler} name="date" />
        <input type="submit" value="Submit" onClick={FormclickHandler} />
      </form>
    </div>
  );
};

export default ExpenseForm;
