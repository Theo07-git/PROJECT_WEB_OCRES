import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 100 },
    { name: 'Group B', value: 100 },
    { name: 'Group C', value: 100 },
    { name: 'Group D', value: 100 },
];

const COLORS = ['#fe1500', '#c47c00', '#b4ff28', '#389900'];

export default class FearAndGreed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PieChart width={310} height={150} onMouseEnter={this.onPieEnter}>
               <Pie
                    data={data}
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
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        );
    }
}