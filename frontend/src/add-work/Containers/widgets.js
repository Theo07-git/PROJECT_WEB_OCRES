import React from 'react';
import '../css/widgets.css';
import TableCoins from "../Components/TableCoins";

export default class Widgets extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { width, height, title, backText, coins } = this.props;

        return (
            <div className='widget' style={{ width: width, height: height }}>
                <div className='widgets'>
                    <h1>{title}</h1>
                    <TableCoins coins={coins}/>
                </div>
                <div className='widgets widarriere'>
                    <p className='backText'>{backText}</p>
                </div>
            </div>
        )
    }
}