import Chart from "../Chart/Chart";

const ExpenseChart=(props)=>{

const dataPoints=[
    {label:"Jan",value:0},
    {label:"Feb",value:0},
    {label:"Mar",value:0},
    {label:"Apr",value:0},
    {label:"May",value:0},
    {label:"Jun",value:0},
    {label:"Jul",value:0},
    {label:"Aug",value:0},
    {label:"Sep",value:0},
    {label:"Oct",value:0},
    {label:"Nov",value:0},
    {label:"Dec",value:0}
]


props.filteredData.forEach((expense)=>{
   
    const dataMonth= expense.date.getMonth()
 
    dataPoints[dataMonth].value+=parseInt(expense.cost)
    
   })


  const maxVal=Math.max(...dataPoints.map((obj)=>{return(parseInt(obj.value))}
    ))
  console.log("main1 ",maxVal)

   
return(
    <Chart dataPoints={dataPoints} maxVal={maxVal}>

    </Chart>
)

}

export default ExpenseChart