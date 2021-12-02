import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import img from "../img/aiguille2.png"
import "../css/FearAndGreed.css"

const dataBack = [
    { name: 'Extrem Fear', value: 100 },
    { name: 'Fear', value: 100 },
    { name: 'Neutral', value: 100 },
    { name: 'Greed', value: 100 },
    { name: 'Extrem Greed', value: 100 },
];

const COLORS = ['#fe1500', '#ff8f00', '#ebf211', '#b4ff28', '#389900'];

export default class FearAndGreed extends React.Component {
    constructor(props) {
        super(props);
    }

    CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].name}`}</label>
                </div>
            );
        }
        return null;
    };

    render() {
        const { data } = this.props;
        const dataUseable = [{ name: data.value_classification, value: data.value }]
        let angle = ((dataUseable[0].value) * 1.8) - 90;
        const colorText = getColorText(dataUseable[0].name);
        return (
            <div className={"PieChartContainer"}>

                <img className={"aiguille"} src={img} width={"10%"} height={"32%"} style={{ transform: `rotateZ(${angle}deg)` }} />

                <PieChart width={310} height={150} onMouseEnter={this.onPieEnter}>
                    <Pie
                        data={dataBack}
                        cx={150}
                        cy={120}
                        startAngle={180}
                        endAngle={0}
                        innerRadius={100}
                        outerRadius={120}
                        fill="#8884d8"
                        paddingAngle={0}
                        dataKey="value"
                    >
                        {dataBack.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    `<Tooltip content={<this.CustomTooltip />} />`
                </PieChart>
                <h1 style={{ color: colorText }}>{dataUseable[0].name} : {dataUseable[0].value}</h1>
            </div >
        );
    }
}

function getColorText(type) {
    let colorText = "";
    if (type === "Extreme Fear") {
        colorText = '#fe1500';
        return colorText;
    } else if (type === "Fear") {
        colorText = '#ff8f00';
        return colorText;
    } else if (type === "Neutral") {
        colorText = '#ebf211';
        return colorText;
    } else if (type === "Greed") {
        colorText = '#b4ff28';
        return colorText;
    } else if (type === "Extreme Greed") {
        colorText = '#389900';
        return colorText;
    }
}