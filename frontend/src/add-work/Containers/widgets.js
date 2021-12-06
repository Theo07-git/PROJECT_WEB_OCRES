import React from 'react';
import '../css/widgets.css';
import TableCoins from "../Components/TableCoins";
import Capitalisation from "../Components/Capitalisation";
import FearAndGreed from "../Components/FearAndGreed";
import Graphique from "../Components/Graphique";
import CoinInfo from "../Components/CoinInfo";
import News from "../Components/News";
import WhaleAlert from '../Components/WhaleAlert';

export default class Widgets extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { className, width, height, title, backText, widgetType, data } = this.props;
        return (
            <div className={className || 'widget'} style={{ width: width, height: height }}>
                <div className='widgets'>
                    <p className="TitleWid">{title}</p>
                    {getWidgetType(widgetType, data)}
                </div>
                <div className='widgets widarriere'>
                    <p className='backText'>{backText}</p>
                </div>
            </div>
        )
    }
}

function getWidgetType(wigetType, data) {
    if (wigetType === "TOP10") {
        return (
            <TableCoins coins={data} />
        )
    } else if (wigetType === "NEWS") {
        return (
            <News news={data} />
        )
    } else if (wigetType === "FEAR") {
        return (
            <div>
                <FearAndGreed data={data} />
            </div>
        )
    } else if (wigetType === "CAP") {
        return (
            <Capitalisation data={data} />
        )
    } else if (wigetType === "GRAPH") {
        return (
            <CoinInfo data={data} />
            //<Graphique />
        )
    } else if (wigetType === "WHALE") {
        return (
            <WhaleAlert whale={data} />
        )
    }
}