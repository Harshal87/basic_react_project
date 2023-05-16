import { useCallback, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  let isClicked = false;

  const [addexpenseclick, setaddexpenseclick] = useState(isClicked);
  const addDataHandler = (obj1) => {
    console.log(obj1);
    const obj2 = {
      ...obj1,
      id: Math.random().toString(),
    };

    props.formDataHandler(obj2);
  };

  const addExpenseHandler = (event) => {
    setaddexpenseclick(true);
  };

  return (
    
    <div className="new-expense">
    {addexpenseclick===false &&
      <button onClick={addExpenseHandler}>Add New Expense</button>
    }
      {addexpenseclick === true && (
       
        <ExpenseForm
          logDataHandler={addDataHandler}
          setaddexpenseclick={setaddexpenseclick}
          addexpenseclick={addexpenseclick}
        />
      )}
    </div>
  );
};

export default NewExpense;
