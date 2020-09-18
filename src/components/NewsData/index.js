import React, {useEffect, useState, useRef} from "react"
import getDataFetch from "../../services"
import IterateArray from "../../utils/IterateArray"
import ArticlesNews from "../ArticleNews"
import Loader  from "../Loader"
import useNearScreen from "../../hooks/useNearScreen"
import "./NewsData.css"

const apiKeyNews = "28d89ba563644bf397ab0a8e7b46fa4d"

function NewsData({keyword}) {
  const [news, setNews] = useState([])
  const [loader, setLoader] = useState(false)
  
  if(!keyword) keyword = "ethereum"

  useEffect(() => {
    async function getNews() {
      const urlNews = 'http://newsapi.org/v2/everything?' +
                      `q=${keyword}&` +
                      'from=2020-09-08&' +
                      'sortBy=popularity&' +
                      `apiKey=${apiKeyNews}`;
      setLoader(true)
      const data = await getDataFetch(urlNews)
      setNews(data.articles)
      setLoader(false)
    }
    getNews().catch(error => console.log(error))
  }, [keyword])
  return ( 
    <div className="App-section-content-articles">
      {
        loader ? <Loader/> :
        <IterateArray 
        array={news} 
        property={"content"} 
        Component={ArticlesNews} 
      />
      }
    </div>
  )
}

function LazyNewsData() {
  const {show, elementRef}= useNearScreen({distance: "50px"})

  return (
    <div ref={elementRef}>
      {show ? <NewsData/> : null}
    </div>
  )
}

export default LazyNewsData