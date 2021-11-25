import React, {useEffect, useState} from 'react';
import './App.css';
import Content from './add-work';
import axios from 'axios'

function App() {
    const [coins, setCoins] = useState([]);
    const [fear, setFear] = useState({});

    const getData = async () => {
        try {
            const res = await axios.get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"
            );
            const res2 = await axios.get(
                "https://api.alternative.me/fng/"
            );
            setCoins(res.data);
            setFear(res2.data.data[0]);
            //console.log(res2.data.value_classification)
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
