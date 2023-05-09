import logo from "./logo.svg";
import ExpenseItems from "./components/ExpenseItem";
import "./App.css";

function App() {
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

  return (
    <div>
      <h1>Expense Tracker</h1>
      {
        obj1.map((obj,index) => (
          <ExpenseItems
            key={index}
            place={obj.place}
            date={obj.date}
            item={obj.item}
            cost={obj.cost}
          >
            {" "}
          </ExpenseItems>
        ))
        // <ExpenseItems place={obj1[0].place} date={obj1[0].date} item={obj1[0].item} cost={obj1[0].cost}> </ExpenseItems>
        // <ExpenseItems place={obj1[1].place} date={obj1[1].date} item={obj1[1].item} cost={obj1[1].cost}> </ExpenseItems>
      }
    </div>
  );
}

export default App;
