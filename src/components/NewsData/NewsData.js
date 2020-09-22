import React, {useEffect, useState} from "react"
import getDataFetch from "../../services"
import IterateArray from "../../utils/IterateArray"
import ArticlesNews from "../ArticleNews"
import Loader  from "../Loader"
import "./NewsData.css"

const apiKeyNews = "28d89ba563644bf397ab0a8e7b46fa4d"

const Initial_Page = 0

function NewsData({keyword}) {
  const [newKeyWord, setNewKeyWord] = useState ([])
  const [news, setNews] = useState([])
  const [newsSlice, setNewsSlice] = useState([])
  const [loader, setLoader] = useState(false)
  const [current, setCurrent] = useState(0)
  const index = 3
  if(!keyword) keyword = "ethereum"

  const handleClick = (e) => {
    setCurrent(prev => prev += 1)
  }
  const sliceArray = (array) => {
    const start = current * index
    const end = index + start
    const slice = array.slice(start, end)
    return slice 
  }
  useEffect(() => {
    const slice = sliceArray(newsSlice)
    setNews(prev => prev.concat(slice))
  }, [current,newsSlice])

  useEffect(() => {
    setCurrent(0)
    async function getNews() {
      const urlNews = 'http://newsapi.org/v2/everything?' +
                      `q=${keyword}&` +
                      'from=2020-09-08&' +
                      'sortBy=popularity&' +
                      `apiKey=${apiKeyNews}`;
      setLoader(true)
      const data = await getDataFetch(urlNews)
      const dataSlice = sliceArray(data.articles)
      // console.log(data.articles)
      setNews(dataSlice)
      setNewsSlice(data.articles)
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
          page={current} 
        />
        }
      </div>
      <button onClick={handleClick}>Click</button>
    </>
  )
}

export default NewsData