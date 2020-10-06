import React from "react"
import CoinsDataTable from "../../components/CoinsDataTable"
import DataInformation from "../../components/DataInformation"
import InfoTitle from "../../components/InfoTitle"
import DataCoinStrip from "../../components/DataCoinStrip"
import LazyNewsdata from "../../components/NewsData"
import "./Home.css"


function Home() {
  return (
    <>
      <section className="App-section-headband">
        <div className="App-section-headband-content-coins">
          <DataCoinStrip/> 
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
            DataComponent={CoinsDataTable}
          />
        </section>

        <section className="App-section-news">
          <InfoTitle spanTitle={"News about"}/>
          {/* <DataInformation
            label={"Search news by keyword"}
            DataComponent={LazyNewsdata}
          /> */}
        </section>
      </section>
    </>
  )
}

export default Home