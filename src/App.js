import ExpenseItems from "./components/ExpenseMain/ExpenseItem";
import { useState } from "react";
import ExpenseForm from "./components/ExpenseMain/ExpenseForm";
import "./App.css"; 


const App = () => {
  const obj1 = [
    {
      item: "Food",
      cost: "$20",
      date: new Date(2023, 4, 12),
      place: "Delhi",
    },

    {
      item: "Mobile",
      cost: "$100",
      date: new Date(2023, 4, 20),
      place: "USA",
    },
  ];
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
       <ExpenseForm></ExpenseForm>
      <div className="box">
        {
          obj1.map((obj, index) => (
            <ExpenseItems
            obj1={obj1}
              key={obj.item}
              place={obj.place}
              date={obj.date}
              item={obj.item}
              cost={obj.cost}
            
            >
              {" "}
              {/* <button onClick={DelclickHandler}>Delete Item</button> */}
            </ExpenseItems>
            
          ))
          // <ExpenseItems place={obj1[0].place} date={obj1[0].date} item={obj1[0].item} cost={obj1[0].cost}> </ExpenseItems>
          // <ExpenseItems place={obj1[1].place} date={obj1[1].date} item={obj1[1].item} cost={obj1[1].cost}> </ExpenseItems>
        }
      </div>
    </div>
  );
};

export default App;
