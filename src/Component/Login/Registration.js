import React from 'react'
import { useNavigate } from 'react-router-dom' 

export default function Registration() {

     const navigate=useNavigate()
     return (
          <div className='container'>
               <div className='registar-form'>
                    <div className='login-header'>
                         <h4>
                              Sign Up
                         </h4>
                    </div>

                    <div className='registr-field'>
                         <input type="text" placeholder='first name' />
                    </div>
                    <div  className='registr-field'>
                         <input type="text" placeholder='last name' />
                    </div>
                    <div className='registr-field'>
                         <input type="text" placeholder='email name' />
                    </div>
                    <div className='registr-field'>
                         <input type="text" placeholder='password' />
                    </div>
                    <div className='registr-field'>
                         <input type="text" placeholder='confirm password ' />
                    </div>

                    <div className='signUp-button'>
                          <button>Sign Up</button>
                    </div>

                    <div className='registar-bottomSection'>
                         <p>Already have account?</p>
                         <button onClick={()=>{navigate('/')}}>Login</button>
                    </div>
               </div>
          </div>
     )
}
