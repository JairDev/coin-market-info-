import React from "react"

function IterateArray({array, property, Component, onClick}) {
  return (
    array.map(item => 
    <Component 
      key={item[property]} 
      item={item} 
      onClick={onClick}
    />)
  )
}
export default IterateArray