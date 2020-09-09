import React, { useState, useEffect} from 'react';
import './App.css';

const urlApi = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
const apiKeyNews = "28d89ba563644bf397ab0a8e7b46fa4d"

function CoinsId({array}) {
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
  const [coinId, setCoinID] = useState([])

  useEffect(()=> {
    async function getDataCoinId() {
      const urlCoinId = `https://api.coingecko.com/api/v3/coins/${keyword}`;
      const data = await getCoin(urlCoinId)
      if(data.error) {
        console.log("data", data.error)
      }else if(!keyword) {
        console.log("not key")
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

  return  <CoinsId array={coinId} keyword={keyword}/>
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
  return (
    array.map(coin => 
      <Coins key={coin.id} coins={coin}/>
    )
  )
}

function ArticlesNews({news}) {
  // console.log(news)
  return (
  <div className="articles">
    <div className="articles-content-img">
      <img src={news.urlToImage} alt=""></img>
    </div>
    <div className="articles-content-description">
      <p>{news.title}</p>
      <div className="articles-content-author">
        <span>by</span>
        <span className="articles-content-author-name">{news.author}</span>
      </div>
    </div>
  </div>
  )
}

function ListNews({keyword}) {
  // console.log(keyword)
  const [news, setNews] = useState([])

  useEffect(() => {
    async function getNews() {
      const urlNews = 'http://newsapi.org/v2/everything?' +
                      `q=${keyword}&` +
                      'from=2020-09-08&' +
                      'sortBy=popularity&' +
                      `apiKey=${apiKeyNews}`;
      const data = await getCoin(urlNews)
      setNews(data.articles)
      console.log(data)
    }
    getNews()
  }, [keyword])
  // console.log(news)
  return ( 
    news.map(news => <ArticlesNews news={news}/>)
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

function Form(props) {
  const {
    onSubmit,
    onChange,
    value,
    textSpan,
    textButton,
  } = props
  return (
    <form onSubmit={onSubmit}>
      <div className="App-section-coin-content-input">
        <label>
          <span>{textSpan}</span>
          <div className="App-section-coin-content-input-button">
            <input type="text" value={value} onChange={onChange} placeholder="E.g bitcoin"></input>
            <button className="button-add-coin">{textButton}</button>
          </div>
        </label>
      </div>
    </form>
  )
}
function App() {
  const [value, setValue] = useState("")
  const [coinList, setCoinList ] = useState([])
  const [keyword, setKeyword] = useState("bitcoin")
  const [keywordNews, setKeywordNews] = useState("bitcoin")
  const [news, setNews] = useState([])

  useEffect(() => {
    (async function getData() {
      const data = await getCoin(urlApi)
      setCoinList(data)
    })().catch(error => console.log(error));

    // async function getNews() {
    //   const data = await getCoin(urlNews)
    //   setNews(data.articles)
    // }
    // getNews().catch(error => console.log(error));
  }, [])
  
  const handleSubmit = (e) => {
    setKeyword(value)
    setValue("")
    e.preventDefault()
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  // const handleSubmitNews = (e) => {
  //   setKeyword(value)
  //   setValue("")
  //   e.preventDefault()
  // }

  // const handleChangeNews = (e) => {
  //   setValue(e.target.value)
  // }
  
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
          {
            <Form 
              onSubmit={handleSubmit} 
              onChange={handleChange} 
              value={value}
              textSpan={"Add currency to chart"}
              textButton={"Add"}
            />
          }
        </div>

        <ListCoinsID keyword={keyword} />
      </section>
      
      <section className="App-section-news">
        <div className="content-title-news">
          <span>News about Btc</span>
        </div>
        <Form 
          onSubmit={handleSubmit} 
          onChange={handleChange} 
          value={value}
          textSpan={"Search news by currency"}
          textButton={"Search"}
        />
        <div className="App-section-content-articles">
          {
            <ListNews keyword={keyword}/>
          }
        </div>
      </section>
      </section>
    </div>
  );
}




export default App;
