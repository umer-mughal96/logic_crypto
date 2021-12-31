import axios from "axios";


export const coinProgress = (data) => {
    return axios.post("Api url", data)
}

export const directOrder = (data) =>{
    return axios.post('http://192.168.56.1:3004/orders/placeOrder', data)
}

export const ruleList = (data) =>{
    return axios.post('http://192.168.100.42:3003/orders/ruleListing', data)
}