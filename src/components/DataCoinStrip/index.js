import React, {useEffect, useState} from "react"
import getDataFetch from "../../services"
import IterateArray from "../../utils/IterateArray"
import CoinStrip from "../../components/CoinStrip"

const url = (number) => 
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${number}&page=1&sparkline=false`

function DataCoinStrip() {
  const [coinStrip, setCoinStrip] = useState([])

   useEffect(() => {
    (async function getData() {
      const urlList = url(10)
      const data = await getDataFetch(urlList)
      setCoinStrip(data)
    })().catch(error => console.log(error));
  }, [])

  return (
    <>
      <IterateArray 
        array={coinStrip} 
        property={"id"} 
        Component={CoinStrip} 
      />
      <IterateArray 
        array={coinStrip} 
        property={"id"} 
        Component={CoinStrip} 
      />
    </>
  )
}

export default DataCoinStrip