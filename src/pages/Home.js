import React from 'react';
import '../styles/Home.css'
import HomeBarChart from '../componaten/charts/BarChart';
import HomePieChart from '../componaten/charts/PieChart';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const Navigate = useNavigate()

 const handleAddButton=()=>{
  Navigate('/add-expense')
  }
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
            <span className='income mt-1'>20000</span>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <span>2023/04/04</span>
            <span className='expense mt-1'>16000</span>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <span className='active'>Activity</span>
            <span className='income mt-1'>4000</span>
          </div>
        </div>
        <div className='app-cards home-data-sections'>
          <div className='d-flex flex-column'>
            <span >This Week</span>
            <span className='income mt-1'>20000</span>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <span>04/01 - 04/06</span>
            <span className='expense mt-1'>16000</span>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <span className='active'>Activity</span>
            <span className='income mt-1'>4000</span>
          </div>
        </div>
        <div className='app-cards home-data-sections'>
          <div className='d-flex flex-column'>
            <span >This Month</span>
            <span className='income mt-1'>20000</span>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <span>04/01 - 04/30</span>
            <span className='expense mt-1'>16000</span>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <span className='active'>Activity</span>
            <span className='income mt-1'>4000</span>
          </div>
        </div>
        <div className='app-cards home-data-sections'>
          <div className='d-flex flex-column'>
            <span >This Year</span>
            <span className='income mt-1'>20000</span>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <span>01/01 - 12/31</span>
            <span className='expense mt-1'>16000</span>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <span className='active'>Activity</span>
            <span className='income mt-1'>4000</span>
          </div>
        </div>

        <div className=' app-cards home-data-sections '>
          <div className='d-flex flex-column'>
            <span >All Time</span>
            <span className='income mt-1'>20000</span>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <span>22/01 - 23/04</span>
            <span className='expense mt-1'>16000</span>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <span className='active'>Activity</span>
            <span className='income mt-1'>4000</span>
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

export default Home;
