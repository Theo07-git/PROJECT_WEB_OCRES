import React from "react";
import '../css/TableCoins.css';

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
                    <tr className="ligne">
                        <td className="text-muted">{index + 1}</td>
                        <td className="logo-nom">
                            <img src={coin.image} alt="" className="img-fluid me-4" style={{ width: "12%" }} />

                            <span className='namecrypto'>{coin.name}</span>
                        </td>
                        <td className='prix'>${coin.current_price}</td>
                        <td className={coin.price_change_percentage_24h > 0 ? 'text-sucess' : 'text-danger'}>
                            {Number(coin.price_change_percentage_24h).toFixed(2)}%</td>
                    </tr>
                ))}

            </tbody>
        </table >

    );
};

export default TableCoins;
/*

const { image, name, symbol, current_price, priceChange } = this.props;

return (
    <div className='widget'>
        <table>
            <thead>
            <tr>
                <th>LOGO</th>
                <th>NAME</th>
                <th>Symbol</th>
                <th>Price</th>
                <th>24H change</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{image}</td>
                <td>{name}</td>
                <td>{symbol}</td>
                <td>{current_price}</td>
                <td>{priceChange}</td>
            </tr>
            </tbody>
        </table>
    </div>
)*/
