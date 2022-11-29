

import React, { useState, useEffect } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieChart = ({ IncomeData, ExpensesData }) => {
      const [Data, setData] = useState([]);
 
     useEffect(() => {
          if (IncomeData.length > 0) {
               const IncomeAmount = IncomeData.map(i => i.amount)
               const total = IncomeAmount.reduce((sum, num) => sum + num)
                let Temp = []
               IncomeData.map((item) => {
                    const percentage = Math.round(item.amount / total * 100)
                    Temp.push({label:item.catagory, y:percentage})
                    setData(Temp)
               })
          }
     }, [IncomeData, ExpensesData]);

     const options = {
          height: '200',
          // theme: "dark2",
          animationEnabled: true,
          exportFileName: "New Year Resolutions",
          exportEnabled: true,
          title: {
               // text: "Top Categories of New Year's Resolution"
          },
          data: [{
               type: "pie",
               showInLegend: true,
               legendText: "{label}",
               toolTipContent: "{label}: <strong>{y}%</strong>",
               indexLabel: "{y}%",
               indexLabelFontWeight: '600',
               indexLabelFontSize: 14,
               indexLabelPlacement: "inside",
               dataPoints:Data
               // dataPoints: [
               //      { y: 32, label: "Health" },
               //      { y: 22, label: "Finance" },
               //      { y: 15, label: "Education" },
               //      { y: 19, label: "Career" },
               //      { y: 5, label: "Family" },
               //      { y: 7, label: "Real Estate" }
               // ]
          }]
     }
     return (
          <div>
               <CanvasJSChart options={options} />
          </div>
     );
}

export default PieChart;
