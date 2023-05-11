import "./ExpenseForm.css"
import ExpenseItems from "./ExpenseItem"

const ExpenseForm=()=>{
    let eventhandler
    
    const FormclickHandler =(event)=>{
        eventhandler=event
        event.preventDefault()
        const item=event.target.parentNode.children[1].value
        const date=event.target.parentNode.children[5].value.split("-")
        const cost=event.target.parentNode.children[3].value

        console.log("Item ",item)
        console.log("Date ",new Date(date))
        console.log("Cost ",cost)
        return(
            <ExpenseItems 
            item={item}
            date={date}
            cost={cost}
            />
        )
      
    }

    return(
        <div className="form-control">
        
            <label htmlFor="title"> Expense Title</label>
            <input type="text" name="title" />
            <label htmlFor="amount"> Expense Amount</label>
            <input type="number" name="amount" />
            <label htmlFor="date"> Expense Date</label>
            <input type="date" name="date" />
            <input type="submit" value="Submit" onClick={FormclickHandler}/>
        

           
        </div>





    )

}

export default ExpenseForm