import React, { useState } from "react"
import "./DataInformation.css"

function DataInformation({label, classButton, FormComponent, DataComponent}) {
  const [keyword, setKeyword] = useState()
  const [value, setValue] = useState("")
  const [current, setCurrent] = useState(0);
  const [rotateCell, setRotateCell] = useState("")

  const handleSubmit = (e) => {
    setRotateCell("rotate-cell")
    if(!value) {
      e.preventDefault()
      return
    }
    setCurrent(0)
    setKeyword(value)
    setValue("")
    e.preventDefault()
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleClick = () => {
    setCurrent((prev) => (prev += 1));
  };
  
  return (
    <>
      <div className="App-section-content-form">
          <FormComponent
            onSubmit={(e) => handleSubmit(e)} 
            onChange={(e) => handleChange(e)} 
            value={value}
            textSpan={label}
            placeHolder={"bitcoin, ethereum"}
            classButton={classButton} 
          />
      </div>
      <DataComponent 
        keyword={keyword} 
        current={current}
        handleClick={handleClick}
        className={rotateCell}
      />
    </>
  )
}

export default DataInformation