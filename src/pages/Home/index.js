import React from "react"
import Form from "../../components/Form"
import CoinsDataTable from "../../components/CoinsDataTable"
import NewsData from "../../components/NewsData"
import DataInformation from "../../components/DataInformation"
import LazyNewsdata from "../../components/NewsData"
import "./Home.css"

function Home({onClick}) {
  return (
    <>
      <section className="App-section-coin">
        <div className="toBottom">
          <svg className="icon icon-ctrl"><use xlinkHref="#icon-ctrl"></use></svg>
          <svg className="icon icon-ctrl"><use xlinkHref="#icon-ctrl"></use></svg>
          <svg className="icon icon-ctrl"><use xlinkHref="#icon-ctrl"></use></svg>
        </div>
        <DataInformation
          title={"Coin Market BTC"}
          label={"Add currency to chart"}
          FormComponent={Form}
          DataComponent={CoinsDataTable}
        />
      </section>

      <section className="App-section-news">
        <DataInformation
          title={"News about BTC"}
          label={"Search news by keyword"}
          FormComponent={Form}
          DataComponent={LazyNewsdata}
        />
      </section>
    </>
  )
}

export default Home