import React from 'react';
import '../../styles/FilterListing.css'
import { useNavigate } from 'react-router-dom';
 

const FilterListing = () => {
    const Navigate = useNavigate()
    let Data = [1, 2]
    return (
        <>
            {
                Data.map((i, index) => {

                    return (
                        <div className='filter-listing-card' onClick={() => Navigate('/add-expense')}
                            style={{
                                backgroundColor: index % 2 == 1 ? 'rgba(137, 187, 238, 0.261)' : '',
                                borderTop: index % 2 == 1 ? '1px solid rgba(128, 128, 128, 0.504)' : '',
                                borderBottom: index % 2 == 1 ? '1px solid rgba(128, 128, 128, 0.504)' : ''
                            }} >
                            <div className=' flc-items'>
                                <div className=' flc-items-top-section'>
                                    <h6>Uncatagory : Electronics Transfer</h6>
                                    <h6 style={{ color: 'red' }}>45</h6>
                                </div>
                                <span>discription</span>
                            </div>
                        </div >
                    )
                })
            }
        </>

    );
}

export default FilterListing;
