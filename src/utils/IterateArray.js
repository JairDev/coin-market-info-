import React from "react"

function IterateArray({array, property, onClick, Component}) {

  return (
    array.map(item => 
      <Component 
        key={item[property]} 
        item={item} 
        onClick={onClick}
      />
    )
  )
}
export default IterateArray