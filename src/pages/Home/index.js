import React from "react"
import Form from "../../components/Form"
import CoinsDataTable from "../../components/CoinsDataTable"
import NewsData from "../../components/NewsData"
import DataInformation from "../../components/DataInformation"

function Home() {
  return (
    <>
      <section className="App-section-coin">
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
          DataComponent={NewsData}
        />
      </section>
    </>
  )
}

export default Home