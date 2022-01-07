import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedCoin, removeSelectedCoin } from "../redux/actions/coinActions";

const CoinDetails = () => {
    const { coinId } = useParams();
    const coin = useSelector((state) => state.coin)
    const { name, symbol, hashing_algorithm, description, links, genesis_date, market_data } = coin;
    const dispatch = useDispatch()

    const fetchCoinDetail = async (id) => {
        const response = await axios
            .get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .catch((err) => {
                console.log('Error', err)
            });
        dispatch(selectedCoin(response.data))
    };
    useEffect(() => {
        if (coinId && coinId !== '') fetchCoinDetail(coinId);
        return () => {
            dispatch(removeSelectedCoin());
        };
    }, [coinId])
    return (
        <div className="ui grid container">
            {Object.keys(coin).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="ui container">
                    <div>
                        <h2>{name}</h2>
                        <h5>Symbol: {symbol}</h5>
                        <h5>Hasing Algorithm: {hashing_algorithm}</h5>
                        <h5>Homepage: </h5><a href="http://www.bitcoin.org" target="_blank" rel="">{links.homepage}</a>
                        <h5>Market Cap in Euro: {market_data.market_cap.eur}</h5>
                        <h5>Genesis Date: {genesis_date}</h5>
                        <h3>Description:</h3>
                        <p style={{'textAlign': 'justify'}}>{description.en}</p>
                    </div>
                </div>
            )
            }
        </div>

    );
}

export default CoinDetails;