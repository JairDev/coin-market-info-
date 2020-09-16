import React, { useState } from "react"

function DataInformation({title, label, FormComponent, DataComponent}) {
  const [keyword, setKeyword] = useState()
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    setKeyword(value)

    setValue("")
    e.preventDefault()
  }
  // console.log(classForm)
  const handleChange = (e) => {
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