import React from "react"

function IterateArray({array, property, onClick, keyword, Component}) {
  return (
    array.map(item => 
      <Component 
        key={item[property]} 
        item={item} 
        onClick={onClick}
        keyword={keyword}
      />
    )
  )
}
export default IterateArray