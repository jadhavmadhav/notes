import React, { useState } from "react";
import "./Home.css";
import { Chart } from "react-google-charts";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const data = [
  ["type", "amount"],
  ["Income", 220],
  ["Expanse", 200],
];

export const options = {
  height: 250,
  is3D: true,
};
const barData = [
  {
    name: "Page A",
    Expenses: 4000,
    Income: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    Expenses: 3000,
    Income: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    Expenses: 2000,
    Income: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    Expenses: 2780,
    Income: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    Expenses: 1890,
    Income: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    Expenses: 2390,
    Income: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    Expenses: 3490,
    Income: 4300,
    amt: 2100,
  },
];
export default function Home() {
  const [pieChart, setpieChart] = useState(false);
  const [Expenses, setExpenses] = useState(true);

  const Active = {
    backgroundColor: "lightblue",
  };

  const NotActive = {
    backgroundColor: "white",
  };

  const responsive = {
    Mx: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    Sm: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const TaskData = [
    { id: 1, title: "Task1", date: "19/10/2022" },
    { id: 2, title: "Task2", date: "19/10/2022" },
    { id: 3, title: "Task3", date: "21/10/2022" },
    { id: 4, title: "Task1", date: "19/10/2022" },
    { id: 5, title: "Task2", date: "19/10/2022" },
    { id: 6, title: "Task3", date: "21/10/2022" },
    { id: 7, title: "Task1", date: "19/10/2022" },
    { id: 8, title: "Task2", date: "19/10/2022" },
    { id: 9, title: "Task3", date: "21/10/2022" },
  ];

  const NotesData = [
    { id: 1, title: "Notes1", date: "19/10/2022" },
    { id: 2, title: "Notes2", date: "15/10/2022" },
    { id: 3, title: "Notes3", date: "15/10/2022" },
    { id: 4, title: "Notes4", date: "14/10/2022" },
    { id: 5, title: "Notes5", date: "14/10/2022" },
    { id: 6, title: "Notes6", date: "09/10/2022" },
    { id: 7, title: "Notes7", date: "09/10/2022" },
    { id: 8, title: "Notes8", date: "07/10/2022" },
    { id: 9, title: "Notes9", date: "06/10/2022" },
  ];

  const carouselData = [
    "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/11/03/Pictures/_0f7275b2-1d92-11eb-a50a-a652099d296d.jpg",
    "https://images.indianexpress.com/2020/11/diwali-feature-1.jpg",
    "https://www.azquotes.com/vangogh-image-quotes/79/90/Quotation-Bill-Gates-I-am-not-in-competition-with-anyone-but-myself-My-79-90-02.jpg",
  ];

  return (
    <div className="row mt-1">
      <div className="expense-charts">
        <div className="chartHeader">
          <div className="filterButtons">
            <button>Year</button>
            <button>Month</button>
            <button>Weekly</button>
            <button>Day</button>
          </div>

          <div className="chartButtons">
            <button
              style={pieChart ? Active : NotActive}
              onClick={() => {
                setpieChart(true);
              }}
            >
              <img src={process.env.PUBLIC_URL + "/images/pie.png"} alt="" />
            </button>
            <button
              style={pieChart ? NotActive : Active}
              onClick={() => {
                setpieChart(false);
              }}
            >
              <img src={process.env.PUBLIC_URL + "/images/bar.png"} alt="" />
            </button>
          </div>
        </div>

        {pieChart ? (
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
          />
        ) : (
          <BarChart
            width={400}
            height={300}
            data={barData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Income" stackId="a" fill="#8884d8" />
            {/* <Bar dataKey="amt" stackId="a" fill="#82ca9d" /> */}
            <Bar dataKey="Expenses" fill="#ffc658" />
          </BarChart>
        )}
      </div>

      <div className="expensesAndIncomeReport">
        <div className="expensesAndIncomeButtons">
          <button
            onClick={() => setExpenses(true)}
            style={Expenses ? Active : NotActive}
          >
            Expenses
          </button>
          <button
            onClick={() => setExpenses(false)}
            style={Expenses ? NotActive : Active}
          >
            Income
          </button>
        </div>

        <div className="mt-4">
          <div className="ExpensesTypes">
            <div
              className="d-flex"
              style={{ justifyContent: "space-between", padding: "0px 10px" }}
            >
              <div>
                <span className="bulet"></span>
                <span className="mx-3">Shopping:</span>
              </div>
              <span>250</span>
            </div>
            <div className=" progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="ExpensesTypes">
            <div>
              <span className="bulet"></span>
              <span className="mx-3">Housing:</span>
            </div>
            <div className=" progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="ExpensesTypes">
            <div>
              <span className="bulet"></span>
              <span className="mx-3">Food:</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="ExpensesTypes">
            <div>
              <span className="bulet"></span>
              <span className="mx-3">Subcription:</span>
            </div>

            <div className="progress">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: "100%" }}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <Carousel
        className="taskCarousel"
        responsive={responsive}
        minimumTouchDrag={50}
        arrows={false}
        autoPlay={true}
        infinite
      >
        {carouselData.map((img) => {
          return (
            <div className="carouselItem">
              <img src={img} alt="121" />
            </div>
          );
        })}
      </Carousel>

      <div className="tasksContainer">
        <div className="taskHeader">
          <h4>Task's</h4>
        </div>
        <div className="row mt-2">
          {TaskData.map((ele) => {
            return (
              <div className="col-4 col-md-3 ">
                <div className=" taskFiles">
                  <img
                    src={process.env.PUBLIC_URL + "/images/file.png"}
                    alt=""
                  />
                  <span>{ele.title}</span>
                  <p className="date">{ele.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="notesContainer">
        <div className="notesHeader">
          <h4>Note's</h4>
        </div>
        <div className="row mt-2">
          {NotesData.map((ele) => {
            return (
              <div className="col-4 col-md-3 ">
                <div className=" taskFiles">
                  <img
                    src={process.env.PUBLIC_URL + "/images/notes.png"}
                    alt=""
                  />
                  <span>{ele.title}</span>
                  <p className="date">{ele.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
