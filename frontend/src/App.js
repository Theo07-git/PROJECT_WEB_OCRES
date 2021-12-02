import React, {useEffect, useState} from 'react';
import './App.css';
import Content from './add-work';
import axios from 'axios'
import {CoinGeckoToPCap, FearAndGreed, NewsApi} from "./add-work/config/api";

function App() {
    const [coins, setCoins] = useState([]); //CoinGecko TOP10/CAP
    const [fear, setFear] = useState({}); // Fear and Greed
    const [news, setNews] = useState(); // API news

    const getData = async () => {
        try {
            const res = await axios.get(CoinGeckoToPCap());
            const res2 = await axios.get(FearAndGreed());
            const res3 = await axios.get(NewsApi());

            //console.log(res3.data.articles);

            setCoins(res.data);
            setFear(res2.data.data[0]);
            setNews(res3.data.articles);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="App">
            <Content top10Data={coins} fear={fear} news={news}/>
        </div>

    );
}

export default App;
