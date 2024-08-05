import React, { Component } from 'react'
import NewsItem from './NewsItem'

const apiKey = process.env.REACT_APP_API_KEY
export class News extends Component {
    articles = []
    constructor() {
        super();
        this.state = {
            articles: this.articles,//storing all the articles from the articles array to the articles variable
            loading: false,//loading bar
        }
    }

    async componentDidMount() {

        let url = `https://newsapi.org/v2/everything?q=apple&from=2024-08-04&to=2024-08-04&sortBy=popularity&apiKey=${apiKey}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles })
    }

    render() {
        return (
            <>
                <div className="mx-4 my-3">
                    <center><h2 className='my-3'>Latest news</h2>
                        <div className="row">
                                {this.state.articles.map((element) => {//here all we return the values of the array articles 
                                    return <div className="col-md-3" key={element.url}>
                                        <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                                    </div>
                                })}

                        </div>
                    </center>
                </div>
            </>
        )
    }
}

export default News