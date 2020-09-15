import React from "react"

function IterateArray({array, property, Component}) {
  return (
    array.map(item => <Component key={item[property]} item={item}/>)
  )
}
export default IterateArray