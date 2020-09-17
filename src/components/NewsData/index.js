import React, {useEffect, useState} from "react"
import getDataFetch from "../../services"
import IterateArray from "../../utils/IterateArray"
import ArticlesNews from "../ArticleNews"
import "./NewsData.css"

const apiKeyNews = "28d89ba563644bf397ab0a8e7b46fa4d"


function NewsData({keyword}) {
  const [news, setNews] = useState([])
  if(!keyword) keyword = "ethereum"
  useEffect(() => {
    async function getNews() {
      const urlNews = 'http://newsapi.org/v2/everything?' +
                      `q=${keyword}&` +
                      'from=2020-09-08&' +
                      'sortBy=popularity&' +
                      `apiKey=${apiKeyNews}`;
      const data = await getDataFetch(urlNews)
      setNews(data.articles)
    }
    getNews()
  }, [keyword])
  return ( 
    <div className="App-section-content-articles">
      <IterateArray 
        array={news} 
        property={"content"} 
        Component={ArticlesNews} 
      />
    </div>
  )
}

export default NewsData