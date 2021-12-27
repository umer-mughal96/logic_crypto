import * as balanceConstants from '../actions/balances/constants'

const iniitialState = {
    balLoading: 'false',
    userBalance: null,
    exchangeKey: null
}

export const Balance = ( state = iniitialState, action ) =>{
    const {type, payload} = action;
    switch (type){
        case balanceConstants.SET_BALANCE_LOADING:
            return{
                ...state,
                balLoading: true
            }
        
        case balanceConstants.GET_BALANCE_SUCCESS:
            return{
                ...state,
                userBalance: payload
            }

        case balanceConstants.GET_EXCHANGE_KEY_SUCCESS:
            return{
                ...state,
                balLoading: false,
                exchangeKey: payload
            }

        case balanceConstants.GET_EXCHANGE_KEY_FAILED:
            return{
                ...state,
                balLoading: false,
            }

        default:
            return state
    }
}

