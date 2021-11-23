import React from "react";

const titles = ["#", "Coin", "Price", "Price Change"];

const TableCoins = ({ coins }) => {

    if (!coins) return <div>no coins</div>

    return (
        <table className="table table-dark mt-4 table-hover">
            <thead>
            <tr>
                {titles.map((title, i) => (
                    <td key={i}>{title}</td>
                ))}
            </tr>
            </thead>
            <tbody>
            {coins.map((coin, index) => (
                /*<CoinRow key={coin.id} coin={coin} index={index + 1} />*/
                <tr>
                    <td className="text-muted">{index + 1}</td>
                    <td>
                        <img src={coin.image} alt="" className="img-fluid me-4" style={{ width: "12%" }}/>
                        <span>{coin.name}</span>
                    </td>
                    <td>${coin.current_price}</td>
                    <td>{Number(coin.price_change_percentage_24h).toFixed(2)}%</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default TableCoins;