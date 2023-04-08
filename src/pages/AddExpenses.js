import React from 'react';
import '../styles/AddExpenses.css'
import { useState } from 'react';
import moment from 'moment';


const activeStyle = {
    backgroundColor: 'rgba(57, 130, 247, 0.978)',
    color: 'white'
}

const unActiveStyle = {
    backgroundColor: 'transparent'
}

 

const AddExpenses = () => {
    const [isExpense, setIsExpense] = useState(true)

    return (
        <div className='addExp-container'>
            <div className='ae-topSection'>
                <div className='ae-toggler-button ' >
                    <span className='toggler-btn1' style={isExpense ? activeStyle : unActiveStyle}>Expense</span>
                    <span className='toggler-btn2'>Income</span>
                </div>
                <div className='ae-dateNtime'>
                    <span>{moment(new Date()).format("YYYY-MM-DD")}</span>
                    <span>{moment(new Date()).format("hh:mm")}</span>
                </div>
            </div>

            <div className='ae-fileds-section'>
                <div className='ae-filed-container'>
                    <span>Amount</span>
                    <input className='ae-filed-input'/>
                    <div className='ae-filed-icons'>
                        <div className='ae-f-icon-circle'>
                            <img />
                        </div>
                    </div>
                </div>
            </div>

            <div className='ae-fileds-section'>
                <div className='ae-filed-container'>
                    <span>Payee</span>
                    <input className='ae-filed-input'/>
                    <div className='ae-filed-icons'>
                        <div className='ae-f-icon-circle'>
                            <img />
                        </div>
                    </div>
                </div>
            </div>

            <div className='ae-fileds-section'>
                <div className='ae-filed-container'>
                    <span>Catagory</span>
                    <span className='ae-filed-selection' style={{color:isExpense?'rgb(236, 4, 4)':'green'}}>Uncatagorized </span>
                    <div className='ae-filed-icons'>
                        <div className='ae-f-icon-circle'>
                            <img />
                        </div>
                    </div>
                </div>
            </div>

            <div className='ae-fileds-section'>
                <div className='ae-filed-container'>
                    <span>Catagory</span>
                    <span className='ae-filed-selection' style={{color:isExpense?'rgb(236, 4, 4)':'green'}}>Electronic Transfer </span>
                    <div className='ae-filed-icons'>
                        <div className='ae-f-icon-circle'>
                            <img />
                        </div>
                    </div>
                </div>
            </div>

            <div className='ae-fileds-section'>
                <div className='ae-filed-container'>
                    <span>Catagory</span>
                    <span className='ae-filed-selection' style={{color:isExpense?'rgb(236, 4, 4)':'green'}}>Uncleared </span>
                    <div className='ae-filed-icons'>
                        <div className='ae-f-icon-circle'>
                            <img />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default AddExpenses;
