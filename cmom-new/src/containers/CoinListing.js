import React, { useEffect } from "react";
import axios from "axios";
import CoinComponent from "./CoinComponent";
import { useDispatch, useSelector } from "react-redux";
import { setCoins } from "../redux/actions/coinActions";


const CoinListing = () => {
    const coins = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchCoins = async () => {
        const response = await axios
            .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
            .catch((err) => {
                console.log('Error', err);
            });
        dispatch(setCoins((response.data)));
    }

    useEffect(() => {
        fetchCoins()
    }, [])

    console.log('coins', coins);

    return (
        <div className="ui grid container">
            <CoinComponent />
        </div>

    )
}

export default CoinListing;