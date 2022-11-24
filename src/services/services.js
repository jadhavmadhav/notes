
import http from '../httpCommon'

export const postExpenses=(Data)=>{
    return http.post('/expenses',Data)
}

export const getExpenses=()=>{
     return http.get('/expenses')
}

export const getExpensesByUserId_expensesType=(userId,expensesType)=>{
    return http.get(`/${userId}/${expensesType}`)
}