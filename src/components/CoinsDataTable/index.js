import React, { useEffect, useState } from "react"
import  getDataFetch from "../../services/index"
import CoinsTable from "../CoinsTable"
import useStateSaveWord from "../../hooks/useStateSaveWord"

function CoinsDataTable({keyword = "bitcoin"}) {  
  const [localKeyword, setLocalKeyword] = useStateSaveWord()
  const [coinId, setCoinID] = useState([]) 
  const [arrayCoins, setArrayCoins] = useState([])
  const urlTable = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`

  useEffect(()=> {
    setLocalKeyword(prev => {
      const findWord = prev.findIndex(word => word === keyword)
      if(findWord === -1) {
        return [...prev, keyword]
      }else {
        return [...prev]
      }
    })
    async function getDataCoinId() {      
      const data = await getDataFetch(urlTable)
      setArrayCoins(data)
      const find = data.find(coin => coin.id === keyword)
      setCoinID((prev) => { 
        const findIdx = prev.findIndex(item => item.id === keyword);
        if(findIdx === -1) {
          return  [...prev, find]
        }else {
          return  [...prev]
        }
      })
    }
    getDataCoinId().catch(error => console.log(error))
    
  }, [keyword, setCoinID, setLocalKeyword, urlTable])
  
  useEffect(() => {
      const findWord = localKeyword.map(word => {
        const filter = arrayCoins.filter(item => item.id === word)
        setCoinID(prev => {
          const findIndex = prev.findIndex(item => item.id === word)
          if(findIndex === -1) {
            return [...prev, ...filter]
          }else {
            return [...prev]
          }
        })
        return filter
      }) 
  },[localKeyword, urlTable, arrayCoins])

  const onClick = (id) => {
    const copyArray = [...coinId]
    const copyArrayKeyword = [...localKeyword]
    const index = copyArray.findIndex(item => item.name === id)
    copyArray.splice(index, 1)
    copyArrayKeyword.splice(index, 1)
    setLocalKeyword(copyArrayKeyword)
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