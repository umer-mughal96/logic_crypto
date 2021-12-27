import axios from 'axios'

export const userBalance = (data) =>{
    return axios.post('http://192.168.100.42:3003/balance/getUserBalances', data)
}

export const exchangeKey = (key) =>{
    return axios.post('http://192.168.100.42:3003/balance/apiKeyValidationCheck', key)
}

