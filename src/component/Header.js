import React, { Fragment } from 'react';
import searchImg from '../assets/search.png'
import style from '../styles/Header.module.css'


const Header = () => {
    return (
        <Fragment>
            <div className=' bg-dark p-2 d-flex justify-content-between'>
                <div className={style.hamburgerIcon}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div style={{ width: '20px', height:'100%' }}>
                    <img src={searchImg} style={{ width: '100%',color:'white' }} />
                </div>
            </div>
        </Fragment>
    );
}

export default Header;