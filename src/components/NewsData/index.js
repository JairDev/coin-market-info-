import React, { Suspense } from "react"
import useNearScreen from "../../hooks/useNearScreen"
// import NewsData from "./NewsData"
import PropTypes from 'prop-types';
import ButtonAdd from "../ButtonAdd"
import "./NewsData.css";

const NewsData = React.lazy(() => import("./NewsData"))

function LazyNewsData({keyword, label, current, handleClick, updateKeyword}) {
  const {show, elementRef}= useNearScreen({distance: "0px"})

  return (
    <div className="content-all-news" ref={elementRef}>
      {show ?
        <Suspense fallback={"cargando..."}>
          <NewsData 
            current={current} 
            keyword={keyword}
            label={label}
            updateKeyword={updateKeyword}
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