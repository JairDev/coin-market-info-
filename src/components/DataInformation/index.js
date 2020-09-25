import React, { useState } from "react"
import "./DataInformation.css"

function DataInformation({title, label, classButton, FormComponent, DataComponent}) {
  const [keyword, setKeyword] = useState()
  const [value, setValue] = useState("")
  const [current, setCurrent] = useState(0);

  const handleSubmit = (e) => {
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
      <div className="content-title-coin">
        <span className="content-no-flip-text">{title}</span>
      </div>

      <div className="App-section-content-form">
          <FormComponent
            onSubmit={(e) => handleSubmit(e)} 
            onChange={(e) => handleChange(e)} 
            value={value}
            textSpan={label}
            textButton={"Add"}
            placeHolder={"bitcoin, ethereum"}
            classButton={classButton} 
          />
      </div>
      <DataComponent 
        keyword={keyword} 
        current={current}
        handleClick={handleClick}
      />
    </>
  )
}

export default DataInformation