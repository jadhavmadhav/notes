import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "red",
      borderColor: "red",
      data: [14, 5, 50, 20, 15, 25, 35],
    },
    {
     label: "Income",
     backgroundColor: "green",
     borderColor: "green",
     data: [0, 10, 5, 2, 20, 30, 45],
   },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;