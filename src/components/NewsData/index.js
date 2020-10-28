import React, { Suspense, useState, useEffect } from "react"
import useNearScreen from "../../hooks/useNearScreen"
// import NewsData from "./NewsData"
import PropTypes from 'prop-types';
import ButtonAdd from "../ButtonAdd"
import "./NewsData.css";

const NewsData = React.lazy(() => import("./NewsData"))

function LazyNewsData({label, keyword, updateKeyword}) {
  const {show, elementRef}= useNearScreen({distance: "0px"})
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    setCurrent(0)
  },[keyword])

  const handleClick = () => {
    setCurrent((prev) => (prev += 1));
  };
 

  return (
    <div className="content-all-news" ref={elementRef}>
      {show ?
        <Suspense fallback={"cargando..."}>
          <NewsData 
            label={label}
            keyword={keyword}
            updateKeyword={updateKeyword}
            current={current}
          />
        </Suspense> : null}
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