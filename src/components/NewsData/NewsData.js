import React, {useEffect, useState} from "react"
import getDataFetch from "../../services"
import IterateArray from "../../utils/IterateArray"
import ArticlesNews from "../ArticleNews"
import Loader  from "../Loader"
import "./NewsData.css"

const apiKeyNews = "28d89ba563644bf397ab0a8e7b46fa4d"

function NewsData({keyword}) {
  const [news, setNews] = useState([])
  const [loader, setLoader] = useState(false)
  let [current, setCurrent] = useState(0)
  const index = 3
  if(!keyword) keyword = "ethereum"

  const sliceArray = (array) => {
    const start = current * index
    const end = index + start
    const slice = array.slice(start, end)
    // console.log(start, end)
    console.log(current)
    return slice
  }

  const handleClick = (e) => {
    // console.log(news)
    setCurrent(prev => prev += 1)
    console.log(current)
    const slice = sliceArray(news)
    // console.log(slice)
    // console.log(slice)
  }

  useEffect(() => {
    async function getNews() {
      const urlNews = 'http://newsapi.org/v2/everything?' +
                      `q=${keyword}&` +
                      'from=2020-09-08&' +
                      'sortBy=popularity&' +
                      `apiKey=${apiKeyNews}`;
      setLoader(true)
      const data = await getDataFetch(urlNews)
      sliceArray(data.articles)
      // console.log(data.articles)
      setNews(data.articles)
      setLoader(false)
    }
    getNews().catch(error => console.log(error))
  }, [keyword])

  return ( 
    <>
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
      <button onClick={handleClick}>Click</button>
    </>
  )
}

export default NewsData