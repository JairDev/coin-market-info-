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

function NewsData({ keyword, current }) {
  const {show, elementRef}= useNearScreen({distance: "0px"})
  const [news, setNews] = useState([]);
  const [newsSlice, setNewsSlice] = useState([]);
  const [loader, setLoader] = useState(false);
  const index = 3;

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
    if (current !== 0) return;
    async function getNews() {
      const urlNews = `http://newsapi.org/v2/everything?q=${keyword}&from=2020-09-08&sortBy=popularity&apiKey=${apiKeyNews}`;
      setLoader(true);
      const data = await getDataFetch(urlNews);
      console.log(data)
      const dataSlice = sliceArray(data.articles);
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

    </>
  );
}

NewsData.propTypes = {
  keyword: PropTypes.string,
  current: PropTypes.number,
};

export default NewsData;
