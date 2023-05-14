import React from "react"
import "./Expensefilter.css"
const Expensefilter=()=>{
    const YearHandler=(event)=>{
        console.log("Year event  ",event.target.value)
    }

    return(
        <div className="expenses-filter">
            <select name="yearSelect" id="" onChange={YearHandler}>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            </select>

        </div>
    )
}

export default Expensefilter