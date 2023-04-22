import React, { memo, useContext } from 'react';
import style from '../styles/expenseModal.module.css'
import { AddExpenseContext } from '../pages/AddExpenses';

const ExpenseModel = ({ List, close }) => {


    const context = useContext(AddExpenseContext)
    const { updateExpense, setUpdateExpense } = context
    console.log("expense modal")
    const handleItem = (i) => {
        const { id, status, method, catagory, subCatagory } = i

        if (status) {
            setUpdateExpense({ ...updateExpense, payStatusId: i.id })
        } else if (method) {
            setUpdateExpense({ ...updateExpense, payMethodId: i.id })
        } else if (subCatagory) {
            setUpdateExpense({ ...updateExpense, subCatagoryId: i.id })

        }
        i.catagory ? close(i.catagoryId) : close()
    }
    return (
        <div className={style.container}>
            <div className={style.itemsSection}>
                {
                    List && List.map((i, index) => {
                        const { id, status, method, catagory, subCatagory } = i
                        return (
                            <div className={style.item} key={index} onClick={() => handleItem(i)}>
                                <h6>{status || method || catagory || subCatagory}</h6>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
}

export default memo(ExpenseModel);
