import * as constants from "./constants";
import * as services from "../../services/balances";
import {
    errorNotification,
    infoNotification,
    successNotification,
} from "../../utils/notification";

export const getUserBalance = (data) => async (dispatch) => {
    console.log("🚀 ~ file: balances.js ~ line 10 ~ getUserBalance ~ data", data)

    try {

        dispatch({ type: constants.SET_BALANCE_LOADING })
        const res = await services.userBalance(data)

        if (res.status === 200) {
            dispatch({ type: constants.GET_BALANCE_SUCCESS, payload: res.data })
            successNotification('Balance Fetch Successfully')
        }
    } catch (error) {
        console.log("🚀 ~ file: balances.js ~ line 13 ~ getUserBalance ~ error", error)
        errorNotification('Balance Fetch Failed')
    }
}

export const exchangeKeyValidation = (data) => async(dispatch) =>{

    try {
        // dispatch({type: constants.SET_BALANCE_LOADING})
        const res = await services.exchangeKey(data)
        console.log("🚀 ~ file: balances.js ~ line 32 ~ exchangeKeyValidation ~ res", res)
        
        dispatch({type: constants.GET_EXCHANGE_KEY_SUCCESS, payload: res.data})

    } catch (err) {
    console.log("🚀 ~ file: balances.js ~ line 37 ~ exchangeKeyValidation ~ error", err)
        
    }
}