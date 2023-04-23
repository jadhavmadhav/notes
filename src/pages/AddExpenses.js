import React, { createContext, memo, useCallback, useEffect, useMemo } from 'react';
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
import ExpenseModel from '../component/expenseModel';
import { getCatagories, getPaymentMethods, getPaymentStatus, getSubCatagories, postExpenses } from '../services/home';


export const AddExpenseContext = createContext()

const activeStyle = {
    backgroundColor: 'rgba(57, 130, 247, 0.978)',
    color: 'white'
}

const unActiveStyle = {
    backgroundColor: 'transparent'
}



const AddExpenses = () => {
    const [isExpense, setIsExpense] = useState(true)
    const [isExpenseModal, setIsExpensesModal] = useState(false)
    const [modalData, setModalData] = useState([])
    const [updateExpense, setUpdateExpense] = useState({
        expenseType: 1,
        subCatagoryId: 1,
        payMethodId: 1,
        payStatusId: 1,
    })



    const Navigate = useNavigate()

    console.log("Add expenses page")

    const handleUpdateExpenses = async (e) => {
        setUpdateExpense({ ...updateExpense, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        try {
            const request = await postExpenses(updateExpense)
            const response = await request.data
            response.status === 200 && Navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const getAllPaymentStatus = async () => {
        try {
            const request = await getPaymentStatus()
            const response = await request.data
            setModalData(response.result)
        } catch (error) {
            console.log(error)
        }
    }

    const getAllPaymentMethods = async () => {
        try {
            const request = await getPaymentMethods()
            const response = await request.data
            setModalData(response.result)
        } catch (error) {
            console.log(error)
        }
    }

    const getAllCatagories = async () => {
        try {
            const request = await getCatagories()
            const response = await request.data
            setModalData(response.result)
        } catch (error) {
            console.log(error)
        }
    }

    const getAllSubCatagories = async (catagoryId) => {
        try {
            const request = await getSubCatagories(catagoryId)
            const response = await request.data
            setModalData(response.result)
        } catch (error) {
            console.log(error)
        }
    }
    const handleStatus = () => {
        getAllPaymentStatus()
        setIsExpensesModal(!isExpenseModal)
    }

    const handlePaymentMethod = () => {
        getAllPaymentMethods()
        setIsExpensesModal(!isExpenseModal)
    }

    const handleCatagory = () => {
        getAllCatagories()
        setIsExpensesModal(!isExpenseModal)
    }

    const handleCloseModal = useCallback((props) => {

        if (props) {
            getAllSubCatagories(props)
            setIsExpensesModal(true)
        }
        else {
            setIsExpensesModal(false)
        }
    })

    useEffect(() => {
    }, [])

    const contextObjcet = {
        updateExpense,
        setUpdateExpense
    }

    return (
        <AddExpenseContext.Provider value={contextObjcet}>
            <div className='addExp-container'>
                {isExpenseModal && <ExpenseModel List={modalData} close={handleCloseModal} />}

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
                            <input className='ae-filed-input' name='amount' onChange={handleUpdateExpenses} />
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
                            <span className='ae-filed-selection'
                                style={{ color: isExpense ? 'rgb(236, 4, 4)' : 'green' }}
                                onClick={handleCatagory}
                            >
                                Uncatagorized
                            </span>
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
                            <span className='ae-filed-selection'
                                style={{ color: isExpense ? 'rgb(236, 4, 4)' : 'green' }}
                                onClick={handlePaymentMethod}
                            >
                                Electronic Transfer </span>
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
                            <span className='ae-filed-selection'
                                style={{ color: isExpense ? 'rgb(236, 4, 4)' : 'green' }}
                                onClick={handleStatus}>Uncleared </span>
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
                            <input className='ae-filed-input' name='description' onChange={handleUpdateExpenses} />
                            <div className='ae-filed-icons'>
                                <div className='ae-f-icon-circle' >
                                    <img src={cameraImg} />
                                    {/* <input accept='image/*' style={{zIndex:'-1'}} id='icon-button-file' type='file' capture='environment' onChange={(e) => handleCapture(e.target)}/> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='ae-btn-section' onClick={handleSubmit}>
                        <button > Ok </button>
                    </div>

                </div>


            </div>
        </AddExpenseContext.Provider>
    );
}

export default memo(AddExpenses);
