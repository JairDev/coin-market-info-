import React from "react"
import useNearScreen from "../../hooks/useNearScreen"
import NewsData from "./NewsData"
import PropTypes from 'prop-types';

function LazyNewsData({keyword = "apple", current}) {
  const {show, elementRef}= useNearScreen({distance: "0px"})

  return (
    <div ref={elementRef}>
      {show ? <NewsData current={current} keyword={keyword}/> : null}
    </div>
  )
}

LazyNewsData.propTypes = {
  keyword: PropTypes.string
}
export default LazyNewsData