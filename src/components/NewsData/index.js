import React, {Suspense} from "react"
import useNearScreen from "../../hooks/useNearScreen"

const NewsData = React.lazy(() =>
  import("./NewsData.js")
)

function LazyNewsData({keyword}) {
  const {show, elementRef}= useNearScreen({distance: "0px"})

  return (
    <Suspense fallback={null}>
      <div ref={elementRef}>
        {show ? <NewsData keyword={keyword}/> : null}
      </div>
    </Suspense>
  )
}

export default LazyNewsData