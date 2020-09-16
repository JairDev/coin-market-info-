import React, { useEffect, useState } from "react"
import  getDataFetch from "../../services/index"
import CoinsTable from "../CoinsTable"

function CoinsDataTable({keyword = "bitcoin"}) {
  const [coinId, setCoinID] = useState([])
  const [classRepeat, setClassRepeat] = useState("")
  useEffect(()=> {
    async function getDataCoinId() {
      const urlCoinId = `https://api.coingecko.com/api/v3/coins/${keyword}`;
      const data = await getDataFetch(urlCoinId)
      setCoinID((prev) => { 
        const findIdx = prev.findIndex(item => item.id === keyword);
        console.log("getDataCoinId -> findIdx", findIdx)
        console.log(prev)
        if(findIdx === -1) {
          console.log(prev)
          return  [...prev, data]
        }else {
          return  [...prev]
        }
      })
    }
    getDataCoinId().catch(error => console.log(error))
  }, [keyword])


  return  (
      <CoinsTable 
        array={coinId} 
        keyword={keyword}
      />
  )
}

export default CoinsDataTable