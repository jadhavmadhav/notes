
import http from '../httpCommon'

export const postExpenses=(Data)=>{
    return http.post('/expenses',Data)
}

export const getExpenses=()=>{
     return http.get('/expenses')
} 

export const getExpensesById=(Id)=>{
    return http.get(`/expenses/${Id}`)
}
export const getExpensesByUserId = (userId)=>{
    return http.get(`/expenses/${userId}`)
}

export const getExpensesByUserId_expensesType=(userId,expensesType)=>{
    return http.get(`/expenses/${userId}/${expensesType}`)
}