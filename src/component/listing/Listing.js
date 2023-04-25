import React from 'react';
import '../../styles/Listing.css'
import { useNavigate } from 'react-router-dom';
import moment from 'moment';


let OddStyle = {
    backgroundColor: 'rgba(137, 187, 238, 0.261)',
    // borderTop: ' 1px solid rgba(128, 128, 128, 0.504)',
    // borderBottom: ' 1px solid rgba(128, 128, 128, 0.504)'
}
const Listing = ({ Data }) => {

    const Navigate = useNavigate()
    // let Data = [1, 2,3]
    return (
        <div className='mt-3'>
            {
                Data.map((i, index) => {
                    const { id, amount, balance, description, createdDate, subcatagory, catagory, type, paystatus, paymethod } = i
                    return (
                        <div key={id} className='listing-card'
                            onClick={() => {
                                Navigate('/add-expense',
                                    {
                                        state: {
                                            expenseId:id
                                        }
                                    })
                            }}
                            style={{
                                backgroundColor: index % 2 == 1 ? 'rgba(137, 187, 238, 0.261)' : '',
                                borderTop: index % 2 == 1 ? '1px solid rgba(128, 128, 128, 0.504)' : '',
                                borderBottom: index % 2 == 1 ? '1px solid rgba(128, 128, 128, 0.504)' : ''
                            }}>
                            <div className='listing-card-top-section'>
                                <span className='lct-date'>{moment(createdDate).format("YYYY/MM/DD ddd")}</span>
                                <span className='lct-amount' style={{ color: type === "income" ? "green" : "red" }}>{amount.toFixed(2)}</span>
                                <span className='lct-calculate'>{balance.toFixed(2)}</span>
                            </div>
                            <div className='d-flex justify-content-between mt-3'>
                                <span className='d-flex flex-column justify-content-end'>{catagory}:{subcatagory && subcatagory}</span>
                                <div>
                                    <h6>{paymethod}</h6>
                                    <h6 className='d-flex justify-content-end'>{paystatus}</h6>
                                </div>
                            </div>
                            <span>{description}</span>

                        </div>
                    )
                })
            }

        </div>
    );
}

export default Listing;
