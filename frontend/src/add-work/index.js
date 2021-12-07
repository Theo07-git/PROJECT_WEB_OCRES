import React from 'react';
import DashBoard from './Containers/dashBoard';
import Admin from './Containers/Admin';
import Harold from './img/harold.jpg';
import './index.css';
import Graphique from "./Components/Graphique";
import { ThemeProvider } from '@material-ui/core';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stateButton: false
        }
    }

    render() {
        const { top10Data, fear, news, whale } = this.props;

        return (
            <div className="mainContainer">
                <DashBoard top10Data={top10Data} fear={fear} news={news} whale={whale} />
            </div>)
    }
}

// function getRightPage(top10Data, fear, news, whale) {
//     

//     if (eventHandler === false) {
//         return 
//     } else {
//         {/* <Admin handleStateButton={this.handleStateButton.bind(this)} /> */ }
//     }
// }