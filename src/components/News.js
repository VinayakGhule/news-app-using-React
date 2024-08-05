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
                    <center><h1 className='my-3'><strong> Latest news</strong></h1>
                        <div className="row">
                                {this.state.articles.map((element) => {//here all we return the values of the array articles 
                                    return <div className="col-md-3" key={element.url}>
                                        <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={!element.urlToImage?"https://images.unsplash.com/photo-1610337673044-720471f83677?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":element.urlToImage} newsUrl={element.url} />
                                    </div>
                                })}

                        </div>
                        <button type="button" class="btn btn-dark">Dark</button>
                    </center>
                </div>
            </>
        )
    }
}

export default News