import React from 'react'
import { Link } from 'react-router-dom' 
import './Header.css'

export default function Header() {
   
  return ( 
      <div className='row headercontainer desktopHeader'>
        <div className='col-4 col-md-1 logo'>
          <div className='icon'>
            <h4>M<sup>2</sup></h4>
          </div>
        </div>
        <div className='col-4 col-md-10 Navbar'>
          <div className='navbar_item'>
            <Link className='nav-link'>Home</Link>
            <Link className='nav-link'>Notes</Link>
            <Link className='nav-link'>Tasks</Link>
            <Link className='nav-link'>Expenses</Link>
            <Link className='nav-link'>Contact Us</Link>
          </div>
        </div>
        <div className='col-4 col-md-1 profile'>
          <Link to='profile' className='profileImage'>
            <img src={process.env.PUBLIC_URL + '/images/madhav.jpeg'} alt="" />
          </Link>
        </div>
      </div> 
  )
}

export const MobileBottomHeader =({handelSelectionModal})=>{

  return( 

    <div className='Navbar mobileHeader'>
      <div className='bottomNavbar_items'>
        <Link to='/' className='bottomNav-link'>
          <img src={process.env.PUBLIC_URL + '/images/home.png'} alt="" />
        </Link>
        <Link to='expenses' className='bottomNav-link'>
          <img src={process.env.PUBLIC_URL + '/images/expense.png'} alt="" />
        </Link>
        <Link className='bottomNav-link' onClick={()=>{handelSelectionModal()}}>
           <img className='Add' src={process.env.PUBLIC_URL +'/images/add.png'} alt="" />
        </Link>
        <Link to='task' className='bottomNav-link'>
          <img src={process.env.PUBLIC_URL + '/images/list-check.png'} alt="" />
        </Link>
        <Link to='notes' className='bottomNav-link'>
          <img src={process.env.PUBLIC_URL + '/images/note.png'} alt="" />
        </Link>
      </div>
    </div>
 
  )
}
