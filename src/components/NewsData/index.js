import React from "react"
import useNearScreen from "../../hooks/useNearScreen"
import NewsData from "./NewsData"
import PropTypes from 'prop-types';
import ButtonAdd from "../ButtonAdd"
import "./NewsData.css";

function LazyNewsData({keyword = "apple", label, current, handleClick, handleSubmit, handleChange}) {
  const {show, elementRef}= useNearScreen({distance: "0px"})
  return (
    <div className="content-all-news" ref={elementRef}>
      {show ? 
      <NewsData 
        current={current} 
        keyword={keyword}
        label={label}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        onClick={handleClick} 
      /> : null}
      <ButtonAdd 
        onClick={handleClick} 
        classButton={"more"}
      />
    </div>
  )
}

LazyNewsData.propTypes = {
  keyword: PropTypes.string
}
export default LazyNewsData