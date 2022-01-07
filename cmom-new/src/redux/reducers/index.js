import { combineReducers } from "redux";
import { coinReducer, selectedCoinReducer  } from "./coinReducer";

const reducers = combineReducers({
    allCoins: coinReducer,
    coin: selectedCoinReducer
});

export default reducers