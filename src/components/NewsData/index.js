import React from "react"
import useNearScreen from "../../hooks/useNearScreen"
import NewsData from "./NewsData"

function LazyNewsData({keyword}) {
  const {show, elementRef}= useNearScreen({distance: "0px"})

  return (
    <div ref={elementRef}>
      {show ? <NewsData keyword={keyword}/> : null}
    </div>
  ) 
}

export default LazyNewsData