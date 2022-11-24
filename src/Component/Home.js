import React, { useState } from "react";
import "./Home.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Outlet, useNavigate } from "react-router-dom";
import LineChart from "./LineChart";

 
 
export default function Home() {
  const [pieChart, setpieChart] = useState(false);
  const [Expenses, setExpenses] = useState(true);

  const [filter, setFilter] = useState("Month");

  const navigate = useNavigate()
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

  const taskData = [
    {
      id: 1,
      taskName: 'My Task 1',
      taskDate: '12/11/22022',
      tasks: [
        {
          checked: true,
          item: 'task1'
        },
        {
          checked: false,
          item: 'task2'
        },
        {
          checked: true,
          item: 'task3'
        }
      ]
    },
    {
      id: 2,
      taskName: 'My Task 2',
      taskDate: '12/11/22022',
      tasks: [
        {
          checked: true,
          item: 'task1'
        },
        {
          checked: false,
          item: 'task2'
        },
        {
          checked: true,
          item: 'task3'
        }
      ]
    },
    {
      id: 3,
      taskName: 'My Task 3',
      taskDate: '12/11/22022',
      tasks: [
        {
          checked: true,
          item: 'task1'
        },
        {
          checked: false,
          item: 'task2'
        },
        {
          checked: true,
          item: 'task3'
        }
      ]
    }
  ]

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

  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ["Expenses", "Income"],
    datasets: [
      {
        label: "# of Votes",
        data: [57,43],
        backgroundColor: ['red','green'],
        borderColor: ['transparent'],
        borderWidth: 2,

      },
    ],
  };

  const option={
    scales: { 
          color: 'red'
        
      }

  }

  
  const ExpensesData = [
    {
      id: 1,
      catagory: 'Shopping',
      expense: 250,
      color: 'green'
    },
    {
      id: 1,
      catagory: 'Shopping',
      expense: 2600,
      color: 'red'
    },
    {
      id: 1,
      catagory: 'Shopping',
      expense: 1450,
      color: 'pink'
    }
  ]

  return (
    <div className="row mt-1 home-conatiner">
      <div className="home-filter">
        <select
          className="filterButtons"
          value={filter && filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="Year" key="">
            Year
          </option>
          <option value="Month" key="">
            Month
          </option>
          <option value="Week" key="">
            Week
          </option>
          <option value="Day" key="">
            Day
          </option>
        </select>

      </div>
      <div className="white-box " style={{display:'flex', justifyContent:'center'}}>
        <Pie options={option} data={data} className='pie-chart' />
      </div>
      <div className="white-box">
        <LineChart />
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

        <div className=" mb-4">
          <div className="ExpensesTypes">
            {
              ExpensesData?.map((ele, ind) => {
                const { id, catagory, expense, color } = ele
                let totalExpense = 4300

                let W = expense / 4300 * 100
                const progressWidth = Math.round(W)

                return (
                  < div className="mt-2 white-box">
                    <div className="d-flex " key={id}
                      style={{ justifyContent: "space-between" }}
                    >
                      <div className="d-flex">
                        <h6 className="bulet" style={{ backgroundColor: color }}></h6>
                        <h6 className="mx-2" style={{ marginTop: '-3px' }}>{catagory} :</h6>
                      </div>
                      <h6 style={{ color: color }}>{expense}</h6>
                    </div>
                    <div className=" progress">

                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: progressWidth + '%', backgroundColor: color }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="4300"
                      ></div>
                    </div>
                  </div>
                )
              })
            }

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
        {carouselData.map((img, ind) => {
          return (
            <div className="carouselItem" key={ind}>
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
          {taskData.map((ele) => {
            const { id, taskName, taskDate } = ele
            return (
              <div className="col-4 col-md-3 " key={id}>
                <div className="mb-2 white-box taskFiles"
                  onClick={() => {
                    navigate('task', { state: id })
                  }}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/file.png"}
                    alt=""
                  />
                  <span>{taskName}</span>
                  <p className="date">{taskDate}</p>
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
          {NotesData.map((ele, ind) => {
            return (
              <div className="col-4 col-md-3 mb-3 " key={ind}>
                <div className=" white-box taskFiles">
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
