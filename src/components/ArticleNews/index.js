import React from "react"
import "./ArticlesNews.css"
import useNearScreen from "../../hooks/useNearScreen"

function ArticlesNews({item}) {
  const {elementRef}= useNearScreen({distance: "0px"})
  return (
    <div ref={elementRef} className="content-articles">
      <a href={item.url} rel="noreferrer noopener" target="_blank">
        <div className="articles">
          <div className="articles-content-img">
            <img src={item.image} alt={item.title}></img>
          </div>
          <div className="articles-content-description">
            <p>{item.title}</p>
            <div className="articles-content-author">
              <span>by</span>
              <span className="articles-content-author-name">{item.source.name}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default ArticlesNews