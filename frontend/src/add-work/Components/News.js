import React from "react";
import "../css/News.css"
import { CircularProgress } from "@material-ui/core";

export default class News extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { news } = this.props;
        let articles = [];

        const random = Math.floor(Math.random() * 20);

        console.log("NEWS : ", news);

        articles = getArticles(news);

        return (
            <div className={"newContainer"}>
                {!news ? (
                    <CircularProgress
                        style={{ color: "gold" }}
                        size={50}
                        thickness={1}
                    />
                ) : (
                    <>
                        <div className={"news"}>
                            <div className={"imgArt"}>
                                <div className={"titleImg"}>
                                    <img className={"picture"} src={articles[random].urlToImage} alt="" />
                                    <h4>{articles[random].title}</h4>
                                </div>
                                <p className='article'>{articles[random].description}</p>
                            </div>
                            <footer className='auteur'>{articles[random].author}</footer>
                        </div>



                        {/*<div className={"news"}>


                        </div>*/}

                    </>
                )}
            </div>
        );
    }
}

function getArticles(news) {
    const articles = [];
    if (!news) {
        return articles;
    }

    news.map(({ title, urlToImage, description, author }) =>
    (
        articles.push({ title: title, urlToImage: urlToImage, description: description, author: author })
    ))
    return articles;
}