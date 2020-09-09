import React, { useState, useEffect} from 'react';
import './App.css';

const urlApi = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
const apiKeyNews = "28d89ba563644bf397ab0a8e7b46fa4d"
const urlNews = 'http://newsapi.org/v2/everything?' +
'q=Bitcoin&' +
'from=2020-09-08&' +
'sortBy=popularity&' +
'apiKey=28d89ba563644bf397ab0a8e7b46fa4d';



function CoinsId({array}) {
  // console.log(array)
  return (
    <div className="App-section-coin-info">
      <table className="App-section-coin-table">
        <thead>
          <tr>
            <th>
              <div>
                <span>Rank</span>
              </div>
            </th>
            <th>
              <div>
              <span>Name</span>
              </div>
            </th>
            <th>
              <div>
              <span>Market Cap</span>
              </div>
            </th>
            <th>
              <div>
              <span>Price</span>
              </div>
            </th>
            <th>
              <div>
              <span>Change (24h)</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            array.map(coin => 
              <TrTable key={coin.id} coins={coin}/>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

function TrTable({coins}) {
  // const slice = String(coins.market_data.current_price.usd).slice(2)
  // const [a,b]= String(coins.market_data.current_price.usd)
  // const format = `${a}${b},${slice}`
  // console.log(format)
  const fixedPercentage = coins.market_data.price_change_percentage_24h.toFixed(2)
  const classPercentage = fixedPercentage < 0 ? "low-percentage" : "high-percentage"
  return (
    <tr className={`App-section-coin-table-${coins.name}`}>
            <td>
              <div>
                {coins.market_cap_rank}
              </div>
            </td>
            <td>
              <div className="App-section-coin-table-coindata">
                <div className="App-section-coin-table-coindata-img"><img src={coins.image.thumb} alt=""></img></div>
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
              <div className={classPercentage}>
                {fixedPercentage}%
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
      setCoinID((prev) => { 
        return  [...prev, data]
      })
    }
    // const coinId = (key) => getCoin(`https://api.coingecko.com/api/v3/coins/${key}`)
    // coinId(keyword).then(res => setCoinID([res]))
    // console.log(coinId(keyword))
    getDataCoinId()
  }, [keyword])
  // console.log(coinId)
  return  <CoinsId array={coinId}/>
}

function Coins({coins}) {
  const fixedPercentage = coins.price_change_percentage_24h.toFixed(2)

  const classPercentage = fixedPercentage < 0 ? "low-percentage" : "high-percentage"
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
  const [key, setKey] = useState([])
  const [news, setNews] = useState([])

  useEffect(() => {
    (async function getData() {
      const data = await getCoin(urlApi)
      setCoinList(data)
    })().catch(error => console.log(error));

    async function getNews() {
      const data = await getCoin(urlNews)
      setNews(data.articles)
      // console.log(data.articles)
    }
    getNews()
  }, [])
  
  const handleSubmit = (e) => {
    setKey(prev => prev.concat([value]))
    // key.map(same => {
    //   if(same === value) {
    //     return null
    //   }
    //   return setKeyword(value)
    // })
    // console.log(key)
    setKeyword(prev => {
      return value
    })
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
        <div className="App-section-coin-content-form">
          {<form onSubmit={handleSubmit}>
            <div className="App-section-coin-content-input">
              <label>
                <span>Add currency to chart</span>
                <div className="App-section-coin-content-input-button">
                  <input type="text" value={value} onChange={handleChange} placeholder="E.g bitcoin"></input>
                  <button className="button-add-coin">Add</button>
                </div>
              </label>
            </div>

          </form>
          }
        </div>

        <ListCoinsID keyword={keyword} />
      </section>
      
      <section className="App-section-news">
        <div className="content-title-news">
          <span>News about Btc</span>
        </div>
        <div className="App-section-content-articles">
          {
            news.map(newsAbout => 
              
              <div className="articles">
                <div className="articles-content-img">
                  <img src={newsAbout.urlToImage} alt=""></img>
                </div>
                <div className="articles-content-description">
                  <p>{newsAbout.description}</p>
                </div>
              </div>
            
            // console.log(newsAbout)
            )
          }
        </div>
        {/* <div className="App-section-content-articles">
          <div className="articles">
            <div>
              <img src="" alt=""></img>
            </div>
            <div>
              <p></p>
            </div>
          </div>
        </div> */}
        
      </section>
        
      </section>
    </div>
  );
}




export default App;
