import axios from "axios";


export const coinProgress = (data) => {
    return axios.post("Api url", data)
}

export const directOrder = (data) =>{
    return axios.post('/orders/placeOrder', data)
}

export const ruleList = (data) =>{
    return axios.post('/orders/ruleListing', data)
}