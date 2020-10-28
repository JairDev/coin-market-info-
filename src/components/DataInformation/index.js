import React, { useState } from "react"
import "./DataInformation.css"

function DataInformation({ label, DataComponent }) {
  const [keyword, setKeyword] = useState()
  const [current, setCurrent] = useState(0);

  const updateKeyword = (keyword) => {
    setCurrent(0)
    setKeyword(keyword)
  }

  const handleClick = () => {
    setCurrent((prev) => (prev += 1));
  };
  // console.log("data")
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


function WithDataInformation(Component) {
  return function WithUpdateInformation({label}) {
    const [keyword, setKeyword] = useState()
    
    const updateKeyword = (keyword) => {
      setKeyword(keyword)
    }
    
    return (
      <>
        <Component 
          label={label} 
          keyword={keyword} 
          // current={current}
          // handleClick={handleClick}
          updateKeyword={updateKeyword}
        />
      </>
    )
  }
}
export default WithDataInformation