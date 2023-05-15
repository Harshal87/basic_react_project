import ExpenseItems from "./components/ExpenseMain/ExpenseItem";
import { useState } from "react";
import ExpenseForm from "./components/New Expense/ExpenseForm";
import NewExpense from "./components/New Expense/NewExpense";
import Expenses from "./components/ExpenseMain/Expenses"
import "./App.css"; 


const App = () => {

  const obj1 = [
    {
      item: "Food",
      cost: "20",
      date: new Date(2023, 4, 12),
      
    },

    {
      item: "Mobile",
      cost: "100",
      date: new Date(2023, 4, 20),
      
    },
  ];
  console.log("REFRESH")

  const[data,setData]=useState(obj1)

  const formDataHandler=(obj)=>{

    setData((prevState)=>{
      console.log("insie ",obj)
     return [obj,...prevState] 
      
    })

  }

  

  
  // const {obj2,setobj2}=useState(obj1)
  // console.log("usestate ",obj2)

  // const DelclickHandler = (event) => {

  //   alert("Clicked");
  //   //console.log(props.key)
  //   // props.obj1.pop(props.key)
  //   obj2.forEach((obj,index)=>{
  //     if(obj.item===event.target.parentNode.children[0].textContent)
  //     obj2.splice(index,1)

      

  //   })
  //   console.log("final ",obj1)
  // setobj2(obj2)
  //   // let element=event.target.parentNode.children[0].textContent
  //   // console.log(element)
  // };



  return (
    <div>
      <h1>Expense Tracker</h1>
      <NewExpense formDataHandler={formDataHandler}/>
      <Expenses obj1={data}></Expenses>
    </div>
  );
};

export default App;
