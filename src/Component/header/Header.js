import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'

export default function Header() {
  return (
    <div style={{ width: '100%' }}>
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
            <Link className='nav-link'>Spead</Link>
            <Link className='nav-link'>Contact Us</Link>
          </div>
        </div>
        <div className='col-4 col-md-1 profile'>
          <div className='profileImage'>
            <img src={process.env.PUBLIC_URL + '/images/madhav.jpeg'} alt="" />
          </div>
        </div>
      </div>

      {/*  ---- mobile header------------ */}

      <div className='mobileHeader'>

        <div className='Navbar'>
          <div className='navbar_item'>
            <Link className='nav-link'>
              <img src={process.env.PUBLIC_URL + '/images/home.png'} alt="" />
            </Link>
            <Link className='nav-link'>
              <img src={process.env.PUBLIC_URL + '/images/expense.png'} alt="" />
            </Link>
            <Link className='nav-link'>
              <div className='Add'>+</div>
            </Link>
            <Link className='nav-link'>
              <img src={process.env.PUBLIC_URL + '/images/list-check.png'} alt="" />
            </Link>
            <Link className='nav-link'>
              <img src={process.env.PUBLIC_URL + '/images/note.png'} alt="" />
            </Link>
          </div>
        </div>

      </div>

    </div>

  )
}
