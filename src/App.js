import React, { useState, useEffect} from 'react';
import { Link, Route } from "wouter";
import './App.css';

const urlApi = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
const apiKeyNews = "28d89ba563644bf397ab0a8e7b46fa4d"

function ArticlesNews({item}) {
  return (
    <div className="content-articles">
      <div className="articles">
        <div className="articles-content-img">
          <img src={item.urlToImage} alt=""></img>
        </div>
        <div className="articles-content-description">
          <p>{item.title}</p>
          <div className="articles-content-author">
            <span>by</span>
            <span className="articles-content-author-name">{item.author}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ListNews({keyword}) {
  const [news, setNews] = useState([])

  useEffect(() => {
    async function getNews() {
      const urlNews = 'http://newsapi.org/v2/everything?' +
                      `q=${keyword}&` +
                      'from=2020-09-08&' +
                      'sortBy=popularity&' +
                      `apiKey=${apiKeyNews}`;
      const data = await getDataFetch(urlNews)
      setNews(data.articles)
    }
    getNews()
  }, [keyword])
  return ( 
    <div className="App-section-content-articles">
      <IterateArray 
        array={news} 
        property={"content"} 
        Component={ArticlesNews} 
      />
    </div>
  )
}

function TrTable({item}) {
  const fixedPercentage = item.market_data.price_change_percentage_24h.toFixed(2)
  const classPercentage = fixedPercentage < 0 ? "low-percentage" : "high-percentage"
  return (
    <tr className={`App-section-coin-table-${item.name}`}>
      <td>
        <div>
          {item.market_cap_rank}
        </div>
      </td>
      <td>
        <div className="App-section-coin-table-coindata">
          <div className="App-section-coin-table-coindata-img"><img src={item.image.thumb} alt=""></img></div>
          <div>
            {item.name}
          </div>
        </div>
      </td>
      <td>
        <div>
          ${item.market_data.market_cap.usd}
        </div>
      </td>
      <td>
        <div>
          ${item.market_data.current_price.usd}
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

function TableCoin({array}) {
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
          <IterateArray array={array} property={"id"} Component={TrTable} />
        </tbody>
      </table>
    </div>
  )
}


function ListCoinsID({keyword}) {
  const [coinId, setCoinID] = useState([])

  useEffect(()=> {
    async function getDataCoinId() {
      const urlCoinId = `https://api.coingecko.com/api/v3/coins/${keyword}`;
      const data = await getDataFetch(urlCoinId)
      if(data.error) {
        console.log("data", data.error)
      }else {
        setCoinID((prev) => { 
          const findIdx = prev.findIndex(item => item.id === keyword);
          if(findIdx === -1) {
            return  [...prev, data]
          }else {
            console.log("repeat")
            return  [...prev]
          }
        })
      }
    }
    getDataCoinId().catch(error => console.log(error))
  }, [keyword])

  return  (
    <>
      <TableCoin array={coinId} keyword={keyword}/>
    </>
  )
}

function Form(props) {
  const {
    onSubmit,
    onChange,
    value,
    textSpan,
    textButton,
    placeHolder
  } = props
  return (
    <form onSubmit={onSubmit}>
      <div className="App-section-coin-content-input">
        <label>
          <span>{textSpan}</span>
          <div className="App-section-coin-content-input-button">
            <input type="text" value={value} onChange={onChange} placeholder={`E.g ${placeHolder}`}></input>
            <button className="button-add-coin">{textButton}</button>
          </div>
        </label>
      </div>
    </form>
  )
}

function CoinStrip({item}) {
  const fixedPercentage = item.price_change_percentage_24h.toFixed(2)

  const classPercentage = fixedPercentage < 0 ? "low-percentage" : "high-percentage"
  return (
    <div className="parent-content-coins">
      <div className="content-coins">
        <div className="img-coin-band"> 
          <img alt="" src={item.image} />
        </div>
        <div className="coin-name">{item.id}</div>
        <span className="coin-price">${item.current_price}</span>
        <span className={classPercentage}>{fixedPercentage}%</span>
        {/* <div className="content-pair-btc">/Pair</div> */}
      </div>
    </div>
  )
}

function IterateArray({array, property, Component}) {
  return (
    array.map(item => <Component key={item[property]} item={item}/>)
  )
}

function Converter() {
  return <div>Converter</div>
}

function App() {
  const [valueCoin, setValueCoin] = useState("")
  const [valueNews, setValueNews] = useState("")
  const [coinList, setCoinList ] = useState([])
  const [keyword, setKeyword] = useState("bitcoin")
  const [keywordNews, setKeywordNews] = useState("apple")

  useEffect(() => {
    (async function getData() {
      const data = await getDataFetch(urlApi)
      setCoinList(data)
    })().catch(error => console.log(error));
  }, [])

  
  const handleSubmit = (id, e) => {
    if(id === "coin") {
      if(!valueCoin) {
        e.preventDefault()
        return;
      }
      setKeyword(valueCoin)
      setValueCoin("")
    }else {
      if(!valueNews) {
        e.preventDefault()
        return;
      }
      setKeywordNews(valueNews)
      setValueNews("")
    }
    e.preventDefault()
  }

  const handleChange = (id, e) => {
    id === "coin" ? setValueCoin(e.target.value) : setValueNews(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-header-nav">
          <div>
            <Link to="/">Logo</Link>
          </div>
          <div>
            <Link to="/converter">Converter</Link>
          </div>
        </nav>
      </header>
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

      <Route path="/converter" component={Converter}/>
      <Route base="/">
        <section className="App-section-main">
        <section className="App-section-coin">
          <div className="content-title-coin">
            <span className="content-no-flip-text">Coin Market</span>
            <div className="content-flip-text">
              <span className="text-flip">BTC</span>
              <span className="text-flip">ETH</span>
              <span className="text-flip">XRP</span>
            </div>
          </div>
          <div className="App-section-content-form">
              <Form 
                onSubmit={(e) => handleSubmit("coin", e)} 
                onChange={(e) => handleChange("coin", e)} 
                value={valueCoin}
                textSpan={"Add currency to chart"}
                textButton={"Add"}
                placeHolder={"bitcoin, ethereum"}
              />
          </div>
          <ListCoinsID keyword={keyword} />
        </section>
        
        <section className="App-section-news">
          <div className="content-title-news">
            <span>News about Btc</span>
          </div>
          <div className="App-section-content-form">
            <Form 
              onSubmit={(e) => handleSubmit("news", e)} 
              onChange={(e) => handleChange("news", e)} 
              value={valueNews}
              textSpan={"Search news by keyword"}
              textButton={"Search"}
              placeHolder={"bitcoin, apple"}
            />
          </div>
            <ListNews keyword={keywordNews}/>
        </section>
      </section>
      </Route>
    </div>
  );
}

async function getDataFetch(url) {
  try {
    const response = await fetch(url)
    return response.json()
  } catch (error) {
    throw new Error(error)
  }
}

export default App;
