import React from 'react';
import '../../styles/Listing.css'
import { useNavigate } from 'react-router-dom';


let OddStyle = {
    backgroundColor: 'rgba(137, 187, 238, 0.261)',
    // borderTop: ' 1px solid rgba(128, 128, 128, 0.504)',
    // borderBottom: ' 1px solid rgba(128, 128, 128, 0.504)'
}
const Listing = () => {

   const Navigate =  useNavigate()
    let Data = [1, 2,3]
    return (
        <div className='mt-3'>
            {
                Data.map((i, index) => {
                    return (
                        <div className='listing-card' onClick={()=>Navigate('/add-expense')} 
                        style={{ backgroundColor: index % 2 == 1 ? 'rgba(137, 187, 238, 0.261)' : '', 
                        borderTop: index % 2 == 1 ? '1px solid rgba(128, 128, 128, 0.504)' : '', 
                        borderBottom: index % 2 == 1 ? '1px solid rgba(128, 128, 128, 0.504)' : '' }}>
                            <div className='listing-card-top-section'>
                                <span className='lct-date'>2023-04-09 FRI</span>
                                <span className='lct-amount'>80.00</span>
                                <span className='lct-calculate'>1400.00</span>
                            </div>
                            <div className='d-flex justify-content-between mt-3'>
                                <span className='d-flex flex-column justify-content-end'>lunch:office</span>
                                <div>
                                    <h6>Electronic Transfer</h6>
                                    <h6 className='d-flex justify-content-end'>Uncleard</h6>
                                </div>
                            </div>
                            <span>discription</span>

                        </div>
                    )
                })
            }

        </div>
    );
}

export default Listing;
