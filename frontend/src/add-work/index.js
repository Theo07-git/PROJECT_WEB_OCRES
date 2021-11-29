import React from 'react';
import DashBoard from './Containers/dashBoard';
import Harold from './img/harold.jpg';
import './index.css';
import Graphique from "./Components/Graphique";

export default class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const{ top10Data, fear, graph } = this.props;

        return (
            <div className="mainContainer">
                <DashBoard top10Data={top10Data} fear={fear} graph={graph}/>
            </div>)
    }
}