import React, { useState } from "react"
import "./DataInformation.css"

function DataInformation({ label, DataComponent }) {
  const [keyword, setKeyword] = useState("ethereum")
  const [current, setCurrent] = useState(0);

  const updateKeyword = (keyword) => {
    setCurrent(0)
    setKeyword(keyword)
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
        handleClick={handleClick}
        updateKeyword={updateKeyword}
      />
    </>
  )
}

export default DataInformation