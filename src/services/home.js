
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

export const getSubCatagories = (catagoryId) => {
    return http.get(`/subcatagory/${catagoryId}`)
}

export const postExpenses = (object) => {
    return http.post('/expense', object)
}

export const getBarChart = () => {
    return http.get('/barchart')
}

export const getExpenseAnalyse = (from, to, all) => {
    if (all) {
        return http.get(`/expense?all=${all}`)
    }
    return http.get(`/expense?from=${from}&to=${to}`)
}

export const getExpenseById = (id) => {
    return http.get(`/expense/${id}`)
}

export const UpdateExpense = (id, object) => {
    return http.put(`/expense/${id}`, object)
}