import React, {useState, useEffect} from "react"
import getDataFetch from "../../services"
import Form from "../../components/Form"
import CoinsDataTable from "../../components/CoinsDataTable"
import DataInformation from "../../components/DataInformation"
import LazyNewsdata from "../../components/NewsData"
import IterateArray from "../../utils/IterateArray"
import CoinStrip from "../../components/CoinStrip"
import InfoTitle from "../../components/InfoTitle"
import "./Home.css"

const url = (number) => 
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${number}&page=1&sparkline=false`


function Home() {
  const [coinList, setCoinList ] = useState([])

  useEffect(() => {
    (async function getData() {
      const urlList = url(10)
      const data = await getDataFetch(urlList)
      setCoinList(data)
    })().catch(error => console.log(error));
  }, [])

  return (
    <>
      <section className="App-section-headband">
        <div className="App-section-headband-content-coins">
          <IterateArray 
            array={coinList} 
            property={"id"} 
            Component={CoinStrip} 
          />
          <IterateArray 
            array={coinList} 
            property={"id"} 
            Component={CoinStrip} 
          />
          </div>
        </section>

    
      <section className="App-section-main">
        <section className="App-section-coin">
          <InfoTitle spanTitle={"Coins Market"}/>
          <div className="toBottom">
            <svg className="icon icon-ctrl"><use xlinkHref="#icon-ctrl"></use></svg>
            <svg className="icon icon-ctrl"><use xlinkHref="#icon-ctrl"></use></svg>
            <svg className="icon icon-ctrl"><use xlinkHref="#icon-ctrl"></use></svg>
          </div>
          <DataInformation
            label={"Add currency to chart"}
            // FormComponent={Form}
            DataComponent={CoinsDataTable}
            classButton={"button-add-coin"}
          />
        </section>

        <section className="App-section-news">
          <InfoTitle spanTitle={"News about"}/>
          <DataInformation
            label={"Search news by keyword"}
            // FormComponent={Form}
            DataComponent={LazyNewsdata}
            classButton={"button-add-news"}
          />
        </section>
      </section>
    </>
  )
}

export default Home