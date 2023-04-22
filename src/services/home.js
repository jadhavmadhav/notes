
import http from '../http-common'

export const getCurrentWeekExpense = () => {
    return http.get('/current-week')
}

export const getPaymentStatus = () => {
    return http.get('/paystatus')
}

export const getPaymentMethods = () => {
    return http.get('/paymentMethod')
}

export const getCatagories = () => {
    return http.get('/catagories')

}

export const getSubCatagories=(catagoryId)=>{
    return http.get(`/subcatagory/${catagoryId}`)
}

export const postExpenses=(object)=>{
    return http.post('/expense',object)
}

export const getBarChart=()=>{
    return http.get('/barchart')
}