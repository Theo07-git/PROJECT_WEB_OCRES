import React from 'react';
import DashBoard from './Containers/dashBoard';
import Harold from './img/harold.jpg';
import './index.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const{ coins } = this.props;
        return (
            <div class="mainContainer">
                <DashBoard coins={coins}/>
            </div>)
    }
}