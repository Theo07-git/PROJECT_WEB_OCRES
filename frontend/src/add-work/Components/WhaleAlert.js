import React from "react";
import "../css/WhaleAlert.css"
import { CircularProgress } from "@material-ui/core";

export default class WhaleAlert extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { whale } = this.props;
        let articles = [];

        const random = Math.floor(Math.random() * 9);

        console.log("Whale : ", whale);

        articles = getArticles(whale);

        return (
            <div className={"newContainer"}>
                {!whale ? (
                    <CircularProgress
                        style={{ color: "gold" }}
                        size={50}
                        thickness={1}
                    />
                ) : (
                    <>
                        <div className={"whaleAlert"}>
                            {
                                articles.map((whale, index) =>
                                    <div className={"whale"}>
                                        <div className={"img"}>
                                            <div className={"title"}>
                                                <p>{whale.numUnity}</p>
                                                <p>{whale.name}</p>
                                            </div>
                                            <p className='valeur'>{whale.value}</p>
                                            <p className='msg'>{whale.message}</p>
                                        </div>
                                        <footer className='date'>{whale.date}</footer>
                                    </div>
                                )
                            }
                        </div>


                    </>
                )}
            </div>
        );
    }
}

function getArticles(whale) {
    const articles = [];
    if (!whale) {
        return articles;
    }

    whale.map(({ numUnity, name, value, message, date }) =>
    (
        articles.push({ numUnity: numUnity, name: name, value: value, message: message, date: date })
    ))
    return articles;
}