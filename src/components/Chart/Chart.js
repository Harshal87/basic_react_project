import ChartBar from "./ChartBar"
import "./Chart.css"

const Chart=(props)=>{
console.log("in ",props.maxVal)
    return(
        <div className="chart">
        {props.dataPoints.map((dataPoint)=>(
            
            <ChartBar
            key ={dataPoint.label}
            value={dataPoint.value}
            maxValue={props.maxVal}
            label={dataPoint.label}
            />
            
          
        )

        )
        

            }
        </div>
    )
}

export default Chart