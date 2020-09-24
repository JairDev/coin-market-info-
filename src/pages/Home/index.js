import React from "react"
import Form from "../../components/Form"
import CoinsDataTable from "../../components/CoinsDataTable"
import DataInformation from "../../components/DataInformation"
import LazyNewsdata from "../../components/NewsData"
import "./Home.css"

function Home() {
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
          classButton={"button-add-coin"}
        />
      </section>

      <section className="App-section-news">
        <DataInformation
          title={"News about BTC"}
          label={"Search news by keyword"}
          FormComponent={Form}
          DataComponent={LazyNewsdata}
          classButton={"button-add-news"}
        />
      </section>
    </>
  )
}

export default Home