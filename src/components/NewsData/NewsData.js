import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import getDataFetch from "../../services";
import IterateArray from "../../utils/IterateArray";
import ArticlesNews from "../ArticleNews";
import Loader from "../Loader";
import useNearScreen from "../../hooks/useNearScreen"
import ButtonAdd from "../ButtonAdd"
import "./NewsData.css";

const apiKeyNews = "28d89ba563644bf397ab0a8e7b46fa4d";

function NewsData({ keyword }) {
  const {show, elementRef}= useNearScreen({distance: "0px"})
  const [news, setNews] = useState([]);
  const [newsSlice, setNewsSlice] = useState([]);
  const [loader, setLoader] = useState(false);
  const [current, setCurrent] = useState(0);
  const index = 3;

  const handleClick = () => {
    setCurrent((prev) => (prev += 1));
  };

  const sliceArray = useCallback(
    (array) => {
      const start = current * index;
      const end = index + start;
      const slice = array.slice(start, end);
      console.log(start, end);
      return slice;
    },
    [current]
  );

  useEffect(() => {
    if (current === 0) return;
    const slice = sliceArray(newsSlice);
    setNews((prev) => [...prev, ...slice]);
  }, [current, newsSlice, sliceArray]);

  useEffect(() => {
    // console.log("-")
    if (current !== 0) return;
    setCurrent(0);
    async function getNews() {
      const urlNews = `http://newsapi.org/v2/everything?q=${keyword}&from=2020-09-08&sortBy=popularity&apiKey=${apiKeyNews}`;
      setLoader(true);
      const data = await getDataFetch(urlNews);
      const dataSlice = sliceArray(data.articles);
      console.log(dataSlice)
      setNews(dataSlice);
      setNewsSlice(data.articles);
      setLoader(false);
    }
    getNews().catch((error) => console.log(error));
  }, [current, keyword, sliceArray]);

  return (
    <>
      <div ref={elementRef} className="App-section-content-articles">
        {loader ? (
          <Loader />
        ) : (
          <IterateArray
            array={news}
            property={"content"}
            Component={ArticlesNews}
            page={current}
          />
        )}
      </div>
      <ButtonAdd onClick={handleClick} classButton={"more"}/>
    </>
  );
}

NewsData.propTypes = {
  keyword: PropTypes.string,
};

export default NewsData;
