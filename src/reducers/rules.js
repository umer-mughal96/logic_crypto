import * as rulesConstants from '../actions/rules/constants'

const iniitialState = {
    loading: false,
    error: null,
    profit: null,
    loss: null,
}

export const Rules = (state = iniitialState, action) => {
    const { type, payload } = action;
    switch(type){
        case rulesConstants.RULE_LOADING:
            return{
                ...state,
                loading: true,
            }

        case rulesConstants.COIN_LOSS:
            return{
                ...state,
                loading: false,
                loss: payload
            }

        case rulesConstants.COIN_PROFIT:
            return{
                ...state,
                loading: false,
                profit: payload
            }   

        case rulesConstants.RULE_ERROR:
            return{
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}