import React, { useState, useEffect} from 'react';
import './App.css';

const urlApi = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"

function CoinsId({coins}) {
  // console.log(coins)
  return (
    <div className="App-section-coin-info">
      <table className="App-section-coin-table">
        <thead>
          <tr>
            <th>
              <div>
                Rank
              </div>
            </th>
            <th>
              <div>
                Name
              </div>
            </th>
            <th>
              <div>
                Market Cap
              </div>
            </th>
            <th>
              <div>
                Price
              </div>
            </th>
            <th>
              <div>
                Change (24h)
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>
                {coins.market_cap_rank}
              </div>
            </td>
            <td>
              <div>
                <div><img src={coins.image.thumb} alt=""></img></div>
                <div>
                  {coins.name}
                </div>
              </div>
            </td>
            <td>
              <div>
                ${coins.market_data.market_cap.usd}
              </div>
            </td>
            <td>
              <div>
                ${coins.market_data.current_price.usd}
              </div>
            </td>
            <td>
              <div>
                {coins.market_data.price_change_percentage_24h}%
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function ListCoinsID({keyword}) {
  // console.log(keyword)
  const [coinId, setCoinID] = useState([])
  // // console.log(coinId)
  // console.count("ListCoinsID")
  useEffect(()=> {
    async function getDataCoinId() {
      const urlCoinId = `https://api.coingecko.com/api/v3/coins/${keyword}`;
      const data = await getCoin(urlCoinId)
      // const arrCoinID = [data]
      setCoinID(prev =>  [...prev, data])
    }
    // const coinId = (key) => getCoin(`https://api.coingecko.com/api/v3/coins/${key}`)
    // coinId(keyword).then(res => setCoinID([res]))
    // console.log(coinId(keyword))
    getDataCoinId()
  }, [keyword])

  return (
    coinId.map(coin => 
      <CoinsId key={coin.id} coins={coin}/>
    )
  )
}

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
  // console.log(array)
  return (
    array.map(coin => 
      <Coins key={coin.id} coins={coin}/>
    )
  )
}



async function getCoin(url) {
  try {
    const response = await fetch(url)
    return response.json()
  } catch (error) {
    throw new Error(error)
  }
}

function App() {
  const [coinList, setCoinList ] = useState([])
  const [keyword, setKeyword] = useState("bitcoin")
  useEffect(() => {
    (async function getData() {
      const data = await getCoin(urlApi)
      setCoinList(data)
    })().catch(error => console.log(error));
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
            <button className="button-add-coin" >Add coin</button>
          </form>
        </div>
        <button onClick={() => setKeyword("ethereum")}>Click</button>
        <ListCoinsID keyword={keyword} />
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
