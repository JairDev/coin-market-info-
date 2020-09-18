import React, { useState } from "react"
import "./DataInformation.css"

function DataInformation({title, label, FormComponent, DataComponent}) {
  const [keyword, setKeyword] = useState()
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    if(!value) {
      e.preventDefault()
      return
    }
    setKeyword(value)
    setValue("")
    e.preventDefault()
  }
  // console.log(classForm)
  const handleChange = (e) => {
    // console.log("n")
    setValue(e.target.value)
  }
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
          />
      </div>
      <DataComponent keyword={keyword} />
    </>
  )
}

export default DataInformation