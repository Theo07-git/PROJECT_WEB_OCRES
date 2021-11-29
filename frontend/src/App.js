import React, {useEffect, useState} from 'react';
import './App.css';
import Content from './add-work';
import axios from 'axios'
import {CoinGeckoToPCap, FearAndGreed, HistoricalChart, SingleCoin} from "./add-work/config/api";

function App() {
    const [coins, setCoins] = useState([]); //CoinGecko TOP10/CAP
    const [fear, setFear] = useState({}); // Fear and Greed
    const [coin, setCoin] = useState(); // CoinGecko Graph

    const getData = async () => {
        try {
            const res = await axios.get(CoinGeckoToPCap());
            const res2 = await axios.get(FearAndGreed());
            //console.log(res3.data.prices);

            setCoins(res.data);
            setFear(res2.data.data[0]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="App">
            <Content top10Data={coins} fear={fear}/>
        </div>

    );
}

export default App;
