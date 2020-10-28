import React, {useState} from "react"
import CoinsDataTable from "../../components/CoinsDataTable"
import DataInformation from "../../components/DataInformation"
import InfoTitle from "../../components/InfoTitle"
import DataCoinStrip from "../../components/DataCoinStrip"
import LazyNewsdata from "../../components/NewsData"
import "./Home.css"
import WithDataInformation from "../../components/DataInformation"


function Home() {
  const DataTable = WithDataInformation(CoinsDataTable)
  const DataNews = WithDataInformation(LazyNewsdata)
  // const [keyword, setKeyword] = useState()
  // const [current, setCurrent] = useState(0);

  // const updateKeyword = (keyword) => {
  //   setCurrent(0)
  //   setKeyword(keyword)
  // }

  // const handleClick = () => {
  //   setCurrent((prev) => (prev += 1));
  // };
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
          {/* <DataInformation
            label={"Add currency to chart"}
            DataComponent={CoinsDataTable}
          /> */}
          <DataTable label="Add currency to chart"/>
          {/* <CoinsDataTable label="Add currency to chart"/> */}
        </section>

        <section className="App-section-news">
          <InfoTitle spanTitle={"News about"}/>
          {/* <DataInformation
            label={"Search news by keyword"}
            DataComponent={LazyNewsdata}
          /> */}
          {/* <LazyNewsdata label="Search news by keyword"/> */}
          <DataNews label="Search news by keyword"/>
        </section>
      </section>
    </>
  )
}

export default Home