import React from "react"
import ExpenseItems from "./ExpenseItem"
const Expenses=(props)=>{
    const obj1=props.obj1
    console.log("Expenses ",obj1)

    

    const formDataHandler=(obj)=>{
        console.log("Expenses obj ",obj)
    }
    return(
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
    )
}

export default Expenses