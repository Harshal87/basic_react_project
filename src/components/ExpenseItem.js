import "./ExpenseItem.css";

function ExpenseItems(props) {
    // const item_cot=10;
  return (

    <div className="expense-item">
      <h3>{props.date.toISOString()}</h3>

      <div className="expense-item__description">
     
        <h2 >{props.item}</h2>

        <h3>{props.place}</h3>

        <div className="expense-item__price">{props.cost}</div>
        </div>
    </div>
  );
}

export default ExpenseItems;
