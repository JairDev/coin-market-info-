import React, { useEffect, useState } from "react"
import  getDataFetch from "../../services/index"
import CoinsTable from "../CoinsTable"


function useStateSaveCoin() {
  const [localKeyword, setLocalKeyword] = useState(JSON.parse(localStorage.getItem("coin")) || [])
  
  useEffect(() => {
    localStorage.setItem("coin", JSON.stringify(localKeyword))
  }, [localKeyword])

  return [localKeyword, setLocalKeyword]
}

function CoinsDataTable({keyword = "bitcoin"}) {  
  const [localKeyword, setLocalKeyword] = useStateSaveCoin()
  const [coinId, setCoinID] = useState([]) 
  const [arrayCoins, setArrayCoins] = useState([])
  const urlTable = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`

  // console.log(localKeyword)

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
      // const urlCoinId = `https://api.coingecko.com/api/v3/coins/${keyword}`;
      const data = await getDataFetch(urlTable)
      // console.log(data)
      setArrayCoins(data)
      const find = data.find(coin => coin.id === keyword)
      // console.log(find)
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
    
  }, [keyword, setCoinID, setLocalKeyword])
  
  useEffect(() => {
    async function getDataCoinId() {      
      const data = await getDataFetch(urlTable)
      // console.log(data)
      const findWord = localKeyword.map(word => {
        const filter = data.filter(item => item.id === word)
        console.log(...filter)
        setCoinID(prev => {
          const findIndex = prev.findIndex(item => item.id === word)
          if(findIndex === -1) {
            return [...prev, ...filter]
          }else {
            return [...prev]
          }
        })
      })

      // const filter = data.filter(item => item.id === "bitcoin")
      
      // setArrayCoins(data)
      
    }
    getDataCoinId().catch(error => console.log(error))
  },[localKeyword])
  const onClick = (id) => {
    const copyArray = [...coinId]
    const index = copyArray.findIndex(item => item.name === id)
    copyArray.splice(index, 1)
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