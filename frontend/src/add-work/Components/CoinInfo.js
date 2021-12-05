import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'
import { CircularProgress, makeStyles } from "@material-ui/core";
import { chartDays } from "../config/data";
import SelectButton from "./SelectButton";

import { Chart, registerables } from 'chart.js';
import axios from "axios";
import { HistoricalChart } from "../config/api";

Chart.register(...registerables);

const CoinInfo = ({ data }) => {
    const [days, setDays] = useState(1);
    const [coin, setCoin] = useState();
    const items = createSelectItems(data);

    const [selectedCurrency, setSelectedCurrency] = useState("bitcoin");

    const fetchHistoricData = async () => {
        const { data } = await axios.get(HistoricalChart(selectedCurrency.toLowerCase(), days));
        setCoin(data.prices);
    };

    useEffect(() => {
        fetchHistoricData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [days, coin]);

    const useStyles = makeStyles((theme) => ({
        container: {
            position: "relative",
            margin: "auto",
            width: "100%",
            height: "65%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            [theme.breakpoints.down("md")]: {
                width: "100%",
                marginTop: 0,
                /*padding: 20,*/
                paddingTop: 0,
            },
        },
    }));

    const classes = useStyles();

    return (
        //<div className={"lineChart"}>
        <div className={classes.container}>
            {!coin ? (
                <CircularProgress
                    style={{ color: "gold" }}
                    size={250}
                    thickness={1}
                />
            ) : (
                <>
                    <select className={"box"} name={"box"} id={"box"}
                        onChange={(e) => {
                            const selectOption = e.target.value; setSelectedCurrency(selectOption);
                        }}>
                        {console.log(selectedCurrency.toLowerCase())}
                        {items}
                    </select>
                    <Line
                        data={{
                            labels: coin.map((coin) => {
                                let date = new Date(coin[0]);
                                let time =
                                    date.getHours() > 12
                                        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                                        : `${date.getHours()}:${date.getMinutes()} AM`;
                                return days === 1 ? time : date.toLocaleDateString();
                            }),

                            datasets: [
                                {
                                    data: coin.map((coin) => coin[1]),
                                    label: `Price ( Past ${days} Days ) in USD`,
                                    borderColor: "#EEBC1D",
                                },
                            ],
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            elements: {
                                point: {
                                    radius: 1,
                                },
                            },
                        }}
                    />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            width: "100%",/*barre en dessous*/
                            height: "20%",
                        }}
                    >
                        {chartDays.map((day) => (
                            <SelectButton
                                key={day.value}
                                onClick={() => setDays(day.value)}
                                selected={day.value === days}
                            >
                                {day.label}
                            </SelectButton>
                        ))}
                    </div>
                </>
            )
            }

        </div >
    );
};

function createSelectItems(data) {
    let items = [];
    data.map((data, index) => (
        items.push(<option key={index} value={data.name}>{data.name}</option>)
    ))
    return items;
}

/*function getSelectedOtpion() {
    const value = document.getElementById('box').value
    console.log("TEst", value);
    //return document.querySelector('#box').value;
}*/


export default CoinInfo;