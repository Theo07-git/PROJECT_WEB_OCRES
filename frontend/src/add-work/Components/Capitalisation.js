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
        const labels = [];
        let dataPercentage = null;
        let sum = null;

        {
            data.map((coin, index) => (
                sum += coin.market_cap
            ))
            console.log(sum);
        }

        {
            data.map((coin, index) => (
                dataPercentage = Rendernumbertopercent(coin.market_cap, sum),
                capData.push({ name: coin.symbol.toUpperCase(), value: dataPercentage })
            ))
        }
        /* {
             data.map((coin, index) => (
                 capData.push({ value: coin.market_cap }),
                 console.log(capData[index]),
                 labels.push({ name: coin.symbol.toUpperCase() }),
                 console.log(labels[index])
             ))
         }
 
         const dataset = [capData, labels];
         dataset.map((coin, index) => (
             console.log(dataset[index])
         ))*/

        return (
            <PieChart width={400} height={300} onMouseEnter={this.onPieEnter}>
                <Pie
                    data={capData}
                    cx={150}
                    cy={80}
                    innerRadius={40}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"

                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />

                    ))}
                </Pie>
                <Tooltip content={<this.CustomTooltip />} />
                <Legend color='white' />
                {/*<Pie
                    data={data}
                    cx={420}
                    cy={200}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>*/}
            </PieChart>
        );
    }
}

function Rendernumbertopercent(marketCapPerCrypto, sum) {
    let percentage = (marketCapPerCrypto / sum) * 100;
    return percentage;
}