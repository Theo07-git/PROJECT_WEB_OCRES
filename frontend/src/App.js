import React, { useEffect, useState } from 'react';
import './App.css';
import Content from './add-work';
import axios from 'axios'
import { CoinGeckoToPCap, FearAndGreed, NewsApi } from "./add-work/config/api";

function App() {
    const [coins, setCoins] = useState([]); //CoinGecko TOP10/CAP
    const [fear, setFear] = useState({}); // Fear and Greed
    const [news, setNews] = useState(); // API news
    const [whale, setWhale] = useState(); // API maison


    const getData = async () => {
        try {
            const res = await axios.get(CoinGeckoToPCap());
            const res2 = await axios.get(FearAndGreed());
            const res3 = await axios.get(NewsApi());
            const res4 = await axios.get("http://localhost:3000/");

            console.log(res4.data);

            setCoins(res.data);
            setFear(res2.data.data[0]);
            setNews(res3.data.articles);
            setWhale(res4.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="App">
            <Content top10Data={coins} fear={fear} news={news} whale={whale} />
        </div>

    );
}

export default App;
