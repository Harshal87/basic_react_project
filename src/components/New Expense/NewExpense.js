import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"
const NewExpense=(props)=>{

const addDataHandler=(obj1)=>{
  console.log(obj1)
    const obj2={
        ...obj1,
        id:Math.random().toString()
    }

    console.log("in new expense ",obj2)

    props.formDataHandler(obj2)
    
}

 return(
    <div className="new-expense">
      <ExpenseForm
      logDataHandler={addDataHandler}
      />
       
   
    </div>
 )  
}

export default NewExpense