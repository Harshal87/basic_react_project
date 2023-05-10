import ExpenseItems from "./components/ExpenseMain/ExpenseItem";
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

  return (
    <div>
      <h1>Expense Tracker</h1>

      <div className="box">
        {
          obj1.map((obj, index) => (
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
    </div>
  );
};

export default App;
