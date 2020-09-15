import React, { useState, useEffect} from 'react';
import { Link, Route } from "wouter";
import './App.css';
import getDataFetch from "./services"
import Home from "./pages/Home"
import IterateArray from "./utils/IterateArray"
import CoinStrip from "./components/CoinStrip"

// const urlApi = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"


const url = (number) => 
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${number}&page=1&sparkline=false`


// function FormSelect({coins, onChange}) {
//   return ( 
//     <form onChange={onChange}>
//       <select name="select">
//         {/* <option value="Bitcoin">Bitcoin</option> */}
//         {
//           coins.map(coin => 
//             <>
//               <option value={`${coin.name}`}>{`${coin.name}`}</option>
//             </>
//           )
//         }
//       </select>
//     </form>
//   )
// }

// function Converter() {
//   const [coins, setCoins] = useState([])
//   const [price, setPrice] = useState("Bitcoin")

//   useEffect(() => {
//     (async function getData() {
//       const getURl = (number) => url(number)
//       const urlList = getURl(20)
//       const data = await getDataFetch(urlList)
//       setCoins(data)
//     })()
//   }, [])

//   const handleChange = (e) => {
//     setPrice(e.target.value)
//   }
  
//   return (
//     <section className="App-section-converter">
//       <div className="App-section-converter-content">
//         <div className="App-section-converter-content-form">
//          <FormSelect onChange={handleChange} coins={coins}/>
//          <div className="App-section-converter-content-price">
//             <span className="converter-price crypto">
//                 {price}
//             </span>
//          </div>
//         </div>
//         <div className="App-section-converter-content-form">
//           {/* <FormSelect/> */}
//          <div className="App-section-converter-content-price">
//             <span className="converter-price fiat">
//                 Price
//             </span>
//          </div>
//         </div>
//       </div>
//     </section>
//   )
// }


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
      <section className="App-section-main">
        {/* <Route 
          path="/converter" 
          component={Converter}
        /> */}

        <Route 
          base="/"
          component={Home}
        />
      </section>
    </div>
  );
}



export default App;


