import React, { PureComponent } from "react";
import { Legend } from "recharts";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import '../css/Capitalisation.css';


const test = [
    { name: 'Group A', value: 100 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#FE9A01', '#3365CC', '#DC3813', '#109618', '#990199', '#0098C5', '#DC4578', '#66AA01', '#B72D2F', '#944699'];

export default class Capitalisation extends React.Component {
    constructor(props) {
        super(props);
    }

    CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].name} : ${payload[0].value.toFixed(2)}%`}</label>
                </div>
            );
        }

        return null;
    };


    render() {
        const { data } = this.props;
        const capData = [];
        let dataPercentage = null;
        let sum = null;

        {
            data.map((coin, index) => (
                sum += coin.market_cap
            ))
        }

        {
            data.map((coin, index) => (
                dataPercentage = renderNumberToPercent(coin.market_cap, sum),
                capData.push({ name: coin.symbol.toUpperCase(), value: dataPercentage })
            ))
        }

        return (
            <div className={"PieChartContainer2"}>
                <PieChart width={320} height={200} horizontalAlign={"center"} onMouseEnter={this.onPieEnter}>
                    <Pie
                        data={capData}
                        cx={'62%'}
                        cy={'40%'}
                        innerRadius={"40%"}
                        outerRadius={"80%"}
                        fill="#8884d8"
                        paddingAngle={0}
                        dataKey="value"
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            elements: {
                                point: {
                                    radius: 1,
                                },
                            },
                        }}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />

                        ))}

                    </Pie>
                    `<Tooltip content={<this.CustomTooltip />} width={"200%"} />`
                    <Legend
                        verticalAlign="center"
                        horizontalAlign="right"
                        /*align="center"*/
                        layout="vertical"
                        width="90%"

                        wrapperStyle={{
                            width: "90%",
                            marginLeft: "10%",
                            fontSize: "2vh",
                            paddingRight: "0%",
                        }}
                    />
                </PieChart>
            </div>
        );
    }
}

function renderNumberToPercent(marketCapPerCrypto, sum) {
    let percentage = (marketCapPerCrypto / sum) * 100;
    return percentage;
}