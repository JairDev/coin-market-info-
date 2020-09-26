import React from "react"

function IterateArray({array, property, Component, onClick, keyword, cell}) {
  return (
    array.map(item => 
      <Component 
        key={item[property]} 
        item={item} 
        onClick={onClick}
        keyword={keyword}
        cell={cell}
      />
    )
  )
}
export default IterateArray