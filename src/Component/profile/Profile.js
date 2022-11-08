import React from 'react'
import './Profile.css';

export default function Profile() {

     const user ={
          fristName:'Madhav',
          lastName:'Jadhav',
          mobileNumber:7620643217,
          birthDate:'12/04/1998',
          email:'jadhavmadhav203@gmail.com',
          gender:'Male',
          website:'M2.com',
          bio:'Here user bio'
     }

     return (
          <div className='profileContainer'>
               <div className='profileImageContainer'>
                    <div className='profile'>
                         <img src={process.env.PUBLIC_URL + '/images/madhav.jpeg'} alt="" />
                    </div>
               </div>

               <div className='profileInfo'>
                    <div className='items'>
                         <h6>First Name  </h6>
                         <h6>: {user.fristName}</h6>
                    </div>
                    <div className='items'>
                         <h6>Last Name</h6>
                         <h6>: {user.lastName}</h6>
                    </div>
                    <div className='items'>
                         <h6>Mobile Number </h6>
                         <h6>: {user.mobileNumber}</h6>
                    </div>
                    <div className='items'>
                         <h6>Birth Date</h6>
                         <h6>: {user.birthDate}</h6>
                    </div>
                    <div className='items'>
                         <h6>Email</h6>
                         <h6>: {user.email}</h6>
                    </div>

                    <div className='items'>
                         <h6>Gender</h6>
                         <h6>: {user.gender} </h6>
                    </div>

                    <div className='items'>
                         <h6>Website </h6>
                         <h6>: {user.website}</h6>
                    </div>
                    <div className='items'>
                         <h6>Bio</h6>
                         <h6>: {user.bio} </h6>
                    </div>

                    <div className='logOutButton'>
                         <button>LogOut</button>
                    </div>



               </div>
          </div>
     )
}
