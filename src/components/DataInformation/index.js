import React, { useState } from "react"
import "./DataInformation.css"

function DataInformation({ label, classButton, DataComponent }) {
  const [keyword, setKeyword] = useState()
  const [current, setCurrent] = useState(0);

  const updateKeyword = (keyword) => {
    setCurrent(0)
    setKeyword(keyword)
    console.log(keyword)
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
        handleClick={handleClick}
        updateKeyword={updateKeyword}
      />
    </>
  )
}

export default DataInformation