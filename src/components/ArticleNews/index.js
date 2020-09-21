import React from "react"
import "./ArticlesNews.css"
import useNearScreen from "../../hooks/useNearScreen"

function ArticlesNews({item}) {
  const {show, elementRef}= useNearScreen({distance: "-10px"})
  // console.log(show)

  return (
    <div ref={elementRef} className="content-articles">
      <div className="articles">
        <div className="articles-content-img">
          <img src={item.urlToImage} alt={item.title}></img>
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