import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import getDataFetch from "../../services";
import IterateArray from "../../utils/IterateArray";
import ArticlesNews from "../ArticleNews";
import Loader from "../Loader";
import Form from "../../components/Form";
import "./NewsData.css";

const apiKeyNews = "69927d6b98c03af209c1e8961b1ff94e";

function NewsData({ label, keyword = "bitcoin", updateKeyword, current }) {
  const [news, setNews] = useState([]);
  const [newsSlice, setNewsSlice] = useState([]);
  const [loader, setLoader] = useState(false);
  const [classError, setClassError] = useState("");
  const index = 3;

  const sliceArray = useCallback(
    (array) => {
      const start = current * index;
      const end = index + start;
      const slice = array.slice(start, end);
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
      const urlNews = `https://gnews.io/api/v4/search?q=${keyword}&lang=en&max=10&token=${apiKeyNews}`;
      setLoader(true);
      const data = await getDataFetch(urlNews);
      if (data.totalArticles === 0) {
        setClassError("error");
        setTimeout(() => {
          setClassError("");
        }, 800);
        return;
      }
      const dataSlice = sliceArray(data.articles);
      setNews(dataSlice);
      setNewsSlice(data.articles);
      setLoader(false);
    }
    getNews().catch((error) => {
      throw new Error(error);
    });
  }, [current, keyword, sliceArray]);

  return (
    <>
      <div className="App-section-content-form">
        <Form
          updateKeyword={updateKeyword}
          label={label}
          placeHolder={"apple, ethereum"}
          classError={classError}
          classButton={"button-add-news"}
        />
      </div>
      <div className="App-section-content-articles">
        {loader ? (
          <Loader />
        ) : (
          <IterateArray
            array={news}
            property={"title"}
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
