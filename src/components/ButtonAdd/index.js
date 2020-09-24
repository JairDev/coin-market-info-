import React from "react"
import "./ButtonAdd.css"

function ButtonAdd({classButton,onClick}) {
  return (
    <button onClick={onClick} className={classButton}>
      <svg className="icon icon-plus"><use xlinkHref="#icon-plus"></use></svg>
    </button>
  )
}

export default ButtonAdd