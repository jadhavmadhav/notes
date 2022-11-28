


import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { getExpensesById } from '../services/services';

const ViewDetails = () => {
     const [ExpensesData, setExpensesData] = useState();
 
     const Id = useLocation().state.expensesId
     console.log(ExpensesData)

     const getExpensesInfo = async () => {
          try {
               const request = await getExpensesById(Id)
               const response = await request.data
               setExpensesData(...response)
          } catch (error) {
               console.log(error)
          }
     }

     useEffect(() => {
          getExpensesInfo()
     }, [Id]);

     return (
          <div>

      <h1>{ExpensesData&&ExpensesData   .catagory}</h1>

          </div>
     );
}

export default ViewDetails;
