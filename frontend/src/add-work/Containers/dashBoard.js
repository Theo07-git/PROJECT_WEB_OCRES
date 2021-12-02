import React from 'react';
import '../css/dashBoard.css';
import Widgets from "./widgets";

export default class DashBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'white',
            isCardFliped1: false,
            isCardFliped2: false,
            isCardFliped3: false,
            isCardFliped4: false,
            isCardFliped5: false,
            isCardFliped6: false
        }

    }

    flipCard1() {
        this.setState((prevState) => ({ isCardFliped1: !prevState.isCardFliped1 }))
    }
    flipCard2() {
        this.setState((prevState) => ({ isCardFliped2: !prevState.isCardFliped2 }))
    }
    flipCard3() {
        this.setState((prevState) => ({ isCardFliped3: !prevState.isCardFliped3 }))
    }
    flipCard4() {
        this.setState((prevState) => ({ isCardFliped4: !prevState.isCardFliped4 }))
    }
    flipCard5() {
        this.setState((prevState) => ({ isCardFliped5: !prevState.isCardFliped5 }))
    }
    flipCard6() {
        this.setState((prevState) => ({ isCardFliped6: !prevState.isCardFliped6 }))
    }

    render() {
        const { top10Data, fear } = this.props;
        return (
            <div className='widgetsContainerprinc'>
                <p className='Title'>DASHBOARD CRYPTO</p>
                <div className='widgetsContainer4'>
                    <div className='widgetsContainer3'>
                        <div className={`widget5`} onClick={() => this.flipCard5()}>
                            <Widgets width={"60vw"} height={"60vh"} title={"GRAPHIQUE"} backText={"Ce widget présente un graphique représentant une courbe. Cette dernière représente l'évolution du cours du Bitcoin au fil du temps. Le Bitcoin est la crypto-monnaie numéro 1 en terme de capitalisation boursière: il influence le cours des autres crypto-monnaies."} widgetType={"GRAPH"} />
                        </div>

                    </div>

                    <div className='widgetsContainer1'>
                        <div className={`widget1 ${this.state.isCardFliped1 ? 'flip' : ''}`} onClick={() => this.flipCard1()}>
                            <Widgets width={"30vw"} height={"60vh"} title={"TOP10"} backText={"Ce widget présente le Top 10 des crypto-monnaies avec la plus grande capitalisation de marché. Pour chaque crypto-monnaie, on retrouveson logo, son nom, son prix actuel et son evolution en pourcentage sur 24H."} widgetType={"TOP10"} data={top10Data} />
                        </div>
                    </div>


                </div>


                <div className='widgetsContainer2'>
                    <div className='widgetsContainer5'>
                        <div className={`widget2 ${this.state.isCardFliped2 ? 'flip' : ''}`} onClick={() => this.flipCard2()}>
                            <Widgets width={"22vw"} height={"40vh"} title={"NEWS"} backText={"Ce widget présente les une nouvelle de l'actualité des crypto-monnaies. En cliquant sur le lien, une page s'ouvre vers l'article. "} widgetType={"NEWS"} data={top10Data} />
                        </div>
                        <div className={`widget3 ${this.state.isCardFliped3 ? 'flip' : ''}`} onClick={() => this.flipCard3()}>
                            <Widgets width={"22vw"} height={"40vh"} title={"FEAR & GREED"} backText={"Ce widget présente un indicateur d'émotion du marché. Il est basé sur la volatilité, des sondages, le momentom et aussi Google trends pour les mots bitcoin ou crypto."} widgetType={"FEAR"} data={fear} />
                        </div>
                    </div>
                    <div className='widgetsContainer6'>
                        <div className={`widget4 ${this.state.isCardFliped4 ? 'flip' : ''}`} onClick={() => this.flipCard4()}>
                            <Widgets width={"22vw"} height={"40vh"} title={"CAPITALISATION"} backText={"Ce widget présente un diagramme circulaire représentant les 10 plus grosses cryptomonnaies selon leur taille en capitalisation boursière."} widgetType={"CAP"} data={top10Data} />
                        </div>
                        <div className={`widget6 ${this.state.isCardFliped6 ? 'flip' : ''}`} onClick={() => this.flipCard6()}>
                            <Widgets width={"22vw"} height={"40vh"} title={"WHALE ALERT"} backText={"Ce widget présente des messages indiquant les transactions importantes et intéressantes au fur et à mesure qu'elles se produisent. Il permet de savoir quand les gros portefeuilles font des transactions."} widgetType={"WHALE"} data={top10Data} />
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}





