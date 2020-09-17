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
      console.log(data)
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


  return  (
      <CoinsTable 
        array={coinId} 
        keyword={keyword}
      />
  )
}

export default CoinsDataTable