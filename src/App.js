import React, { useState, useEffect} from 'react';
import './App.css';
import getDataFetch from "./services"
import Home from "./pages/Home"
import IterateArray from "./utils/IterateArray"
import CoinStrip from "./components/CoinStrip"

const url = (number) => 
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${number}&page=1&sparkline=false`


function App() {
  const [coinList, setCoinList ] = useState([])

  useEffect(() => {
    (async function getData() {
      const urlList = url(10)
      const data = await getDataFetch(urlList)
      setCoinList(data)
    })().catch(error => console.log(error));
  }, [])

  return (
    <div className="App">
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
        <Home/>
      </section>
    </div>
  );
}



export default App;


