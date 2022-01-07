import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CoinComponent = () => {
    const coins = useSelector((state) => state.allCoins.coins);
    const renderList = coins.map((coin) => {
        const { id, symbol, name, image, current_price, high_24h, low_24h } = coin;
        return (
            <div className="four wide coloumn" key={id}>
                <Link to={`/coin/${id}`}>
                    <div className="ui link cards" style={{'paddingBottom': '50px', 'paddingRight': '15px'}}>
                        <div className="card">
                            <div className="image">
                                <img src={image} alt={name} />
                            </div>
                            <div className="content">
                                <div className="header"><h2>{name}</h2></div>
                                <div className="meta"><h5>Symbol: {symbol}</h5></div>
                                <div className="meta price"><h4>Current Price: {current_price}</h4></div>
                                <div className="meta price"><h4>High 24 hour Price: {high_24h}</h4></div>
                                <div className="meta price"><h4>Low 24 hour Price: {low_24h}</h4></div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>)
    })
    return <Fragment>{renderList}</Fragment>;
}

export default CoinComponent;