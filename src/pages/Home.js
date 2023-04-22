import React, { memo, useEffect, useState } from 'react';
import '../styles/Home.css'
import HomeBarChart from '../component/charts/BarChart';
import HomePieChart from '../component/charts/PieChart';
import { useNavigate } from 'react-router-dom';
import { getCurrentWeekExpense } from '../services/home';
import moment from 'moment'

const Home = () => {
  const [today, setToday] = useState()
  const [weekData, setWeekData] = useState()
  const [month, setMonth] = useState()
  const [year, setYear] = useState()
  const [allTime, setAllTime] = useState()


  const curr = new Date()
  let date = curr.getDate()
  const Data = [
    {
      expense: "income",
      total: 144444,
      createdDate: "2023-04-16"
    },
    {
      expense: "income",
      total: 104,
      createdDate: "2023-04-19"
    },
    {
      expense: "income",
      total: 10,
      createdDate: "2023-04-22"
    }
  ]

  



  const Navigate = useNavigate()


  const handleAddButton = () => {
    Navigate('/add-expense')
  }
  const getAllExpensesAmounts = async () => {
    try {
      const request = await getCurrentWeekExpense()
      const response = await request.data
      if (response.status === 200) {
        let result = response.result
        setWeekData(result.thisWeek)
        setToday(result.today)
        setMonth(result.thisMonth)
        setYear(result.thisYear)
        setAllTime(result.allTime)
      }

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getAllExpensesAmounts()
  }, [])
  console.log("Home page")
  return (
    <div>
      <div className='home-container'>
        <div className='d-flex justify-content-around'>
          <span >Income</span>
          <span>Expense</span>
          <span>Balance</span>
        </div>
        <div className='app-cards current-balance-section'>
          <span>Current Balance</span>
          <span>5000</span>
        </div>
        <div className='app-cards home-data-sections'>
          <div className='d-flex flex-column'>
            <span >Today</span>
            <span className='income mt-1'>
              {today?.income?.total.toFixed(2)}
            </span>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <span>
              {moment(today?.todayDate).format("MM-DD ddd")}
            </span>
            <span className='expense mt-1' onClick={() => Navigate('/expense-anaylsis')}>
              {today?.expense?.total.toFixed(2)}
            </span>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <span className='active' onClick={() => Navigate('/activitys')}>Activity</span>
            <span className='income mt-1'>
              {today?.balance.toFixed(2)}
            </span>
          </div>
        </div>
        <div className='app-cards home-data-sections'>
          <div className='d-flex flex-column'>
            <span >This Week</span>
            <span className='income mt-1'>{weekData?.income?.total.toFixed(2)}</span>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <span>{moment(weekData?.startDateOfWeek).format("MM-DD")} - {moment(weekData?.lastDateOfWeek).format("MM-DD")}</span>
            <span className='expense mt-1'>{weekData?.expense?.total.toFixed(2)}</span>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <span className='active'>Activity</span>
            <span className='income mt-1'>{weekData?.balance.toFixed(2)}</span>
          </div>
        </div>
        <div className='app-cards home-data-sections'>
          <div className='d-flex flex-column'>
            <span >This Month</span>
            <span className='income mt-1'>{month?.income?.total.toFixed(2)}</span>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <span>{weekData && moment(month?.firstDateOfMonth).format("MM-DD")} - {weekData && moment(month?.lastDateOfMonth).format("MM-DD")}</span>
            <span className='expense mt-1'>{month?.expense?.total.toFixed(2)}</span>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <span className='active'>Activity</span>
            <span className='income mt-1'>{month?.balance.toFixed(2)}</span>
          </div>
        </div>
        <div className='app-cards home-data-sections'>
          <div className='d-flex flex-column'>
            <span >This Year</span>
            <span className='income mt-1'>{year?.income?.total.toFixed(2)}</span>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <span>{moment(year?.firstDateOfYear).format("MM-DD")} - {moment(year?.lastDateOfYear).format("MM-DD")}</span>
            <span className='expense mt-1'>{year?.expense?.total.toFixed(2)}</span>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <span className='active'>Activity</span>
            <span className='income mt-1'>{year?.balance.toFixed(2)}</span>
          </div>
        </div>

        <div className=' app-cards home-data-sections '>
          <div className='d-flex flex-column'>
            <span >All Time</span>
            <span className='income mt-1'>{allTime?.income?.total.toFixed(2)}</span>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <span>All Time</span>
            <span className='expense mt-1'>{allTime?.expense?.total.toFixed(2)}</span>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <span className='active'>Activity</span>
            <span className='income mt-1'>{allTime?.balance.toFixed(2)}</span>
          </div>
        </div>


        <div className='app-cards mt-2 d-flex flex-column justify-content-center'>
          <div className='d-flex justify-content-between '>
            <span>04/01 - 04/07</span>
            <div className='d-flex'>
              <div>
                <input type='radio' id='ex' name='expenseType' value='1' />
                <label htmlFor='ex' className='ms-1'>Expense</label>
              </div>
              <div className='ms-2'>
                <input type='radio' id='in' name='expenseType' value='2' />
                <label htmlFor='in' className='ms-1' >Income</label>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <HomeBarChart />
          </div>
        </div>

        <div className='app-cards mt-2 d-flex justify-content-center' style={{ height: '200px' }}>
          <HomePieChart />
        </div>
      </div>
      <div className='add-button' onClick={handleAddButton}>
        <h1>+</h1>
      </div>
    </div>
  );
}

export default Home
