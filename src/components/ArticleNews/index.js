import React from "react"
import "./ArticlesNews.css"

function ArticlesNews({item}) {
  return (
    <div className="content-articles">
      <div className="articles">
        <div className="articles-content-img">
          <img src={item.urlToImage} alt=""></img>
        </div>
        <div className="articles-content-description">
          <p>{item.title}</p>
          <div className="articles-content-author">
            <span>by</span>
            <span className="articles-content-author-name">{item.author}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlesNews