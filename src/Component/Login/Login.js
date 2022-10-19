import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { LoginAction } from '../../action/action';
import './Login.css'

export default function Login() {
    const [UserData, setUserData] = useState({});

    const dispatch = useDispatch()
    const navigate = useNavigate()



    const handelLogin = (e) => {
        setUserData({ ...UserData, [e.target.name]: e.target.value })
    }

    const handelContinue = () => { 
        if (UserData.userName === "m" && UserData.password === "m") {
            
        }
    }
 
    

    return (
        <div className='container'>
            <div className='login-form'>
                <div className='login-header'>
                    <h4>Sign In</h4>
                </div>
                <div className='login-field'>
                    <input type='text' name='userName' onChange={handelLogin} placeholder='User Name' />
                </div>
                <div className='login-field'>
                    <input type='password' name='password' onChange={handelLogin} placeholder='Password' />
                </div>
                <div className='login-button'>
                    <button onClick={handelContinue}>continue</button>
                </div>
                <div className='login-registr-button'>
                    <button onClick={() => { navigate('/registration') }}>registration ..!</button>
                </div>
                <div className='loginWith-google'>
                    <button>login with google</button>
                </div>
                <h6>Or</h6>
                <div className='loginWith-facebook'>
                    <button>login with facebook</button>
                </div>
            </div>


        </div>
    )
}
