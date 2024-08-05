import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description, imageUrl, newsUrl}=this.props;
    return (
      <div>
        <div className="card my-3" style={{width:"18 rem"}}>
          <img src={imageUrl} width="100%" height="180" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text text-dark"><a href={newsUrl} target='_blank'>{description}...</a></p>
            <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem