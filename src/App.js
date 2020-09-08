import React, { useState, useEffect} from 'react';
import './App.css';

const urlApi = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
// const urlBtcApi = "https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=btc"
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
          <tr className={`App-section-coin-table-${coins.name}`}>
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

function TrTable({coins}) {
  return (
    <tr className={`App-section-coin-table-${coins.name}`}>
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
          {
            coinId.map(coin => 
              // <CoinsId key={coin.id} coins={coin}/>
              <TrTable key={coin.id} coins={coin}/>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

function Coins({coins}) {
  const fixedPercentage = coins.price_change_percentage_24h.toFixed(2)
  // console.log(fixedPercentage)
  const classPercentage = fixedPercentage < 0 ? "low-percentage" : "high-percentage"
  // console.log(classPercentage)
  // console.log(coins)
  return (
    <div className="parent-content-coins">
      <div className="content-coins">
        <div className="img-coin-band"> 
          <img alt="" src={coins.image} />
        </div>
        <div className="coin-name">{coins.id}</div>
        <span className="coin-price">${coins.current_price}</span>
        <span className={classPercentage}>{fixedPercentage}%</span>
        <div className="content-pair-btc">/Pair</div>
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
  const [value, setValue] = useState("")
  const [coinList, setCoinList ] = useState([])
  const [keyword, setKeyword] = useState("bitcoin")

  useEffect(() => {
    (async function getData() {
      const data = await getCoin(urlApi)
      setCoinList(data)
    })().catch(error => console.log(error));
  }, [])

  const handleSubmit = (e) => {
    setKeyword(value)
    setValue("")
    e.preventDefault()
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-header-nav">
          <div>Logo</div>
          <div><a href="#0">Converter</a></div>
        </nav>
      </header>
      <section className="App-section-headband">
      <div className="App-section-headband-content-coins">
        <ListCoins array={coinList}/>
        <ListCoins array={coinList}/>
        </div>
      </section>

      <section className="App-section-main">
      <section className="App-section-coin">
        <div>
          {<form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange}></input>
            <button className="button-add-coin">Add coin</button>
          </form>
          }
        </div>

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
