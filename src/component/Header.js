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
                <div>
                    <div className={style.searchSection}>
                        <input />
                        <img src={searchImg} />

                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default Header;