import React from "react";
import CoinsDataTable from "../../components/CoinsDataTable";
import InfoTitle from "../../components/InfoTitle";
import DataCoinStrip from "../../components/DataCoinStrip";
import LazyNewsdata from "../../components/NewsData";
import WithDataInformation from "../../components/DataInformation";
import "./Home.css";

function Home() {
  const DataTable = WithDataInformation(CoinsDataTable);
  const DataNews = WithDataInformation(LazyNewsdata);

  return (
    <>
      <section className="App-section-headband">
        <div className="App-section-headband-content-coins">
          <DataCoinStrip />
        </div>
      </section>

      <section className="App-section-main">
        <section className="App-section-coin">
          <InfoTitle spanTitle={"Coins Market"} />
          <DataTable label="Add currency to chart" />
        </section>

        <section className="App-section-news">
          <InfoTitle spanTitle={"News about"} />
          <DataNews label="Search news by keyword" />
        </section>
      </section>
    </>
  );
}

export default Home;
