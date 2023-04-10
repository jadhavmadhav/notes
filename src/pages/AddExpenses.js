import React from 'react';
import '../styles/AddExpenses.css'
import { useState } from 'react';
import moment from 'moment';

import statusImg from '../assets/credit-card.png'
import payMethodImg from '../assets/credit-card(1).png'
import catagoryImg from '../assets/menu.png'
import payeeImg from '../assets/payee.png'
import ammountImg from '../assets/calculator.png'
import cameraImg from '../assets/camera.png'
import { Link, Outlet, useNavigate } from 'react-router-dom';


const activeStyle = {
    backgroundColor: 'rgba(57, 130, 247, 0.978)',
    color: 'white'
}

const unActiveStyle = {
    backgroundColor: 'transparent'
}



const AddExpenses = () => {
    const [isExpense, setIsExpense] = useState(true)
    const [source, setSource] = useState()

    const camera = React.useRef(null);
    const [image, setImage] = useState(null);

    const Navigate = useNavigate()


    const handleCapture = (target) => {
        if (target.files) {
            if (target.files.length !== 0) {
                const file = target.files[0];
                const newUrl = URL.createObjectURL(file);
                setSource(newUrl);
            }
        }
    }

    return (
        <div className='addExp-container'>
            <div className='ae-topSection'>
                <div className='ae-toggler-button ' >
                    <span className='toggler-btn1' onClick={() => setIsExpense(!isExpense)} style={isExpense ? activeStyle : unActiveStyle}>Expense</span>
                    <span className='toggler-btn2' onClick={() => setIsExpense(!isExpense)} style={!isExpense ? activeStyle : unActiveStyle}>Income</span>
                </div>
                <div className='ae-dateNtime'>
                    <span>{moment(new Date()).format("YYYY-MM-DD")}</span>
                    <span>{moment(new Date()).format("hh:mm")}</span>
                </div>
            </div>
            <div>
                <div className='ae-fileds-section'>
                    <div className='ae-filed-container'>
                        <span>Amount</span>
                        <input className='ae-filed-input' />
                        <div className='ae-filed-icons'>
                            <div className='ae-f-icon-circle'>
                                <img src={ammountImg} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='ae-fileds-section'>
                    <div className='ae-filed-container'>
                        <span>Payee</span>
                        <input className='ae-filed-input' />
                        <div className='ae-filed-icons'>
                            <div className='ae-f-icon-circle'>
                                <img src={payeeImg} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='ae-fileds-section'>
                    <div className='ae-filed-container'>
                        <span>Catagory</span>
                        <span className='ae-filed-selection' style={{ color: isExpense ? 'rgb(236, 4, 4)' : 'green' }}>Uncatagorized </span>
                        <div className='ae-filed-icons'>
                            <div className='ae-f-icon-circle'>
                                <img src={catagoryImg} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='ae-fileds-section'>
                    <div className='ae-filed-container'>
                        <span>Payment Method</span>
                        <span className='ae-filed-selection' style={{ color: isExpense ? 'rgb(236, 4, 4)' : 'green' }}>Electronic Transfer </span>
                        <div className='ae-filed-icons'>
                            <div className='ae-f-icon-circle'>
                                <img src={payMethodImg} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='ae-fileds-section'>
                    <div className='ae-filed-container'>
                        <span>Status</span>
                        <span className='ae-filed-selection' style={{ color: isExpense ? 'rgb(236, 4, 4)' : 'green' }}>Uncleared </span>
                        <div className='ae-filed-icons'>
                            {/* <div className='ae-f-icon-circle'> */}
                            <Link to='/add-expense/status' className='ae-f-icon-circle' >
                                <img src={statusImg} />
                            </Link>
                            {/* </div> */}
                        </div>
                    </div>
                </div>

                <div className='ae-fileds-section'>
                    <div className='ae-filed-container'>
                        <span>Description</span>
                        <input className='ae-filed-input' />
                        <div className='ae-filed-icons'>
                            <div className='ae-f-icon-circle' >
                                <img src={cameraImg} />
                                {/* <input accept='image/*' style={{zIndex:'-1'}} id='icon-button-file' type='file' capture='environment' onChange={(e) => handleCapture(e.target)}/> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='ae-btn-section' onClick={()=>Navigate('/')}>
                    <button > Ok </button>
                </div>

            </div>


        </div>


    );
}

export default AddExpenses;
