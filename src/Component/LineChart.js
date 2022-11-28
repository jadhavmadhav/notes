import React ,{useState,useEffect} from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 


const LineChart = ({IncomeData,ExpensesData}) => {
   
  const [Data, setData] = useState([]); 
  useEffect(() => {
    let temp=[]
    IncomeData.map((item)=>{
      let mydate =item.date.split('-')
      let time = item.time.split(':') 
        let date= new Date(mydate[0],mydate[1],mydate[2],time[0],time[1],time[2])
        let amount = item.amount
        temp.push({x:date,y:amount})
        setData(temp)
    })
  }, [IncomeData]);

  const options = {
    height:'250', 
    animationEnabled: true,
     

    title:{
      // text: "Monthly Sales - 2017"
    },
    axisX: {
      valueFormatString: "HH TT",  
    },
    axisY: {
      // title: "Sales (in USD)",
      // prefix: "$",
      includeZero: false
    },
    data: [{
      // yValueFormatString: "$#,###",
      xValueFormatString: "DD/MM/YY", 
      type: "spline",
      dataPoints:Data
      // dataPoints: [
      //   { x: new Date(2017, 0,12, 1,12,56), y: 25060 },
      //   { x: new Date(2017, 0,12, 2,12,56), y: 27980 },
      //   { x: new Date(2017, 0,12, 3,12,56), y: 42800 },
      //   { x: new Date(2017, 0,12, 4,12,56), y: 32400 },
      //   { x: new Date(2017, 0,12, 5,12,56), y: 35260 },
      //   { x: new Date(2017, 0,12, 8,12,56), y: 33900 },
      //   { x: new Date(2017, 0,12, 9,12,56), y: 40000 },
      //   { x: new Date(2017, 0,12, 10,12,56), y: 52500 },
      //   { x: new Date(2017, 0,12, 11,12,56), y: 32300 },
      //   { x: new Date(2017, 0,12, 12,12,56), y: 42000 },
      //   { x: new Date(2017, 0,12, 15,12,56), y: 37160 },
      //   { x: new Date(2017, 0,12, 16,12,56), y: 38400 }
      // ]
    }]
  }
  return (
  <div> 
			<CanvasJSChart options = {options} />  
		</div>
  );
}

export default LineChart;
