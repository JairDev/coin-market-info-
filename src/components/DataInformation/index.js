import React, { useState } from "react"
import "./DataInformation.css"

function DataInformation({ label, classButton, DataComponent }) {
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
      <DataComponent 
        keyword={keyword} 
        current={current}
        label={label} 
        classButton={classButton}
        value={value}
        handleClick={handleClick}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </>
  )
}

export default DataInformation