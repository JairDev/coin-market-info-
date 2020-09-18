import React, { useEffect, useState } from "react"
import  getDataFetch from "../../services/index"
import CoinsTable from "../CoinsTable"


function useStateSaveCoin() {
  const [coinId, setCoinID] = useState(JSON.parse(localStorage.getItem("coin")) || [])
  
  localStorage.setItem("coin", JSON.stringify(coinId))

  return [coinId, setCoinID]
}

function CoinsDataTable({keyword = "bitcoin"}) {
  const [coinId, setCoinID] = useStateSaveCoin()
  // const [coinId, setCoinID] = useState([])

  useEffect(()=> {
    async function getDataCoinId() {
      const urlCoinId = `https://api.coingecko.com/api/v3/coins/${keyword}`;
      const data = await getDataFetch(urlCoinId)
      setCoinID((prev) => { 
        const findIdx = prev.findIndex(item => item.id === keyword);
        if(findIdx === -1) {
          return  [...prev, data]
        }else {
          return  [...prev]
        }
      })
    }
    getDataCoinId().catch(error => console.log(error))
  }, [keyword, setCoinID])

  const onClick = (id) => {
    console.log(coinId)
    const copyArray = [...coinId]
    const index = copyArray.findIndex(item => item.name === id)
    copyArray.splice(index, 1)
    console.log(copyArray)
    setCoinID(copyArray) 
  }

  return  (
    <CoinsTable 
      array={coinId} 
      keyword={keyword}
      onClick={onClick}
    />
  )
}

export default CoinsDataTable