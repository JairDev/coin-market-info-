import React, { useState, useEffect} from 'react';
import './App.css';

const urlApi = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"


function Coins({coins}) {
  return (
    <div className="parent-content-coins">
      <div className="content-coins">
        <div className="coin-name">{coins.id}</div>
        <span className="coin-price">${coins.current_price}</span>
        <span>{coins.price_change_percentage_24h}</span>
      </div>
    </div>

  )
}

function ListCoins({array}) {
  console.log(array)
  return (
    array.map(coin => 
      <Coins coins={coin}/>
    )
  )
}

function App() {
  const [coinList, setCoinList ] = useState([])
  useEffect(() => {
    fetch(urlApi)
    .then(res => res.json())
    .then(data => setCoinList(data))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-header-nav">
          <div>Logo</div>
          <div><a href="#">Converter</a></div>
        </nav>
      </header>
      <section className="App-section-headband">
      <div className="App-section-headband-content-coins">
        <ListCoins array={coinList}/>
        </div>
      </section>

      <section className="App-section-main">
      <section className="App-section-coin">
        <div>
          <form>
            <button className="button-add-coin">Add coin</button>
          </form>
        </div>
        <div className="App-section-coin-info">
          <table className="App-section-coin-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Market Cap</th>
                <th>Price</th>
                <th>Change (24h)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div>
                    1
                  </div>
                </td>
                <td>
                  <div>
                    BTC
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="App-section-news">
        <div className="content-title-news">
          <span>News</span>
        </div>
        <div className="App-section-content-articles">
          <div className="articles">Articles</div>
          <div className="articles">Articles</div>
        </div>
      </section>
        
      </section>
    </div>
  );
}




export default App;
