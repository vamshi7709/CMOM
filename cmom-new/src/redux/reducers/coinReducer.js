import { ActionTypes } from "../constants/coin-types";

const initialState = {
    coins: []
}
export const coinReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_COINS:
            return {...state, coins: payload};

        default:
            return state;
    }

}

export const selectedCoinReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case ActionTypes.SELECTED_COIN:
            return {...state, ...payload};

        default:
            return state;
    }

}