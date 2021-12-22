import * as constants from "./constants";
import * as services from "../../services/rules";
import {
    errorNotification,
    infoNotification,
    successNotification
    
} from "../../utils/notification"


export const coinLoss = (data) => async(dispatch) => {
console.log("🚀 ~ file: rules.js ~ line 12 ~ coinLoss ~ data", data)
    
    dispatch({ type: constants.RULE_LOADING });
    try{
        const res = await services.coinProgress(data);
        dispatch({
            type: constants.COIN_LOSS,
            payload: res.data.COIN_LOSS
        })
        successNotification(res.data.msg);
    } catch (error) {
        error.response?.data.msg
        ? infoNotification(error.response?.data.msg)
        : error.response?.data.error?.map((error) => errorNotification(error.msg));
        dispatch({type: constants.RULE_ERROR, payload: error})
    }
};

export const coinProfit = (data) => async(dispatch) => {
    dispatch({ type: constants.RULE_LOADING });
    try{
        const res = await services.coinProgress(data);
        dispatch({
            type: constants.COIN_PROFIT,
            payload: res.data.COIN_PROFIT
        })
        successNotification(res.data.msg)
    } catch(error) {
        error.response?.data.msg
        ?infoNotification(error.response?.data.msg)
        :error.response?.data.error.map((error) => errorNotification(error.msg));
        dispatch({type: constants.RULE_ERROR, payload: error})
    }

};