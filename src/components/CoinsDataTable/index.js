import React, { useEffect, useCallback } from "react";
import CoinsTable from "../CoinsTable";
import useStateSaveWord from "../../hooks/useStateSaveWord";
import Form from "../../components/Form";
import useFindData from "../../hooks/useFindData";
import getDataFetch from "../../services";

const urlTable = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;


function CoinsDataTable({ label, keyword, updateKeyword }) {
  const { coinId, setCoinID, arrayCoins, classError } = useFindData({
    keyword,
  });
  const [localKeyword, setLocalKeyword] = useStateSaveWord();

  useEffect(() => {
    if (!keyword) return;
    setLocalKeyword((prev) => {
      const findWord = prev.findIndex((word) => word === keyword);
      if (findWord === -1) {
        return [...prev, keyword];
      } else {
        return [...prev];
      }
    });
  }, [keyword, setLocalKeyword]);

  useEffect(() => {
    //Search local storage for keywords and filter the array with those matches for up-to-date information
    const findWord = localKeyword.map((word) => {
      const filter = arrayCoins.filter((item) => item.id === word);

      setCoinID((prev) => {
        const findIndex = prev.findIndex((item) => item.id === word);
        if (findIndex === -1) {
          return [...prev, ...filter];

        } else {
          return [...prev];
        }
      });
      return filter;
    });
  }, [localKeyword, arrayCoins, setCoinID]);

  const handleClick = useCallback(
    (id) => {
      const copyArrayCoin = [...coinId];
      const copyArrayKeyword = [...localKeyword];
      const remainingCoins = copyArrayCoin.filter((item) => item.id !== id);
      const remainingWords = copyArrayKeyword.filter((item) => item !== id);
      setLocalKeyword(remainingWords);
      setCoinID(remainingCoins);
    },
    [coinId, localKeyword, setCoinID, setLocalKeyword]
  );
  const update = async () => {
    const data = await getDataFetch(urlTable);
    console.log(data)
      const words = localKeyword.map((keywords)  => {
        const filterCoins = data.filter((coinNewPrice) => coinNewPrice.id === keywords )
        const price = coinId.map((coinOldPrice) => {
          const newPrice = filterCoins.map(coin => {
            const match = coinOldPrice.current_price === coin.current_price
            const sameCoin =coinOldPrice.id === coin.id
            // console.log("old",coinOldPrice.current_price)
            // console.log("new", coin.current_price) 
            console.log(coinOldPrice.current_price)
            console.log(coin.current_price)
            // if(sameCoin && coinOldPrice.current_price !== coin.current_price) {
            //   console.log("new", coin.current_price)
            //   // setCoinID([coin])
            //   // return coin
            // }else {
            //   console.log("old",coinOldPrice.current_price)
            //   // return coinOldPrice
            // }
          })
          // console.log(newPrice)
        })
      })
  }

  return (
    <>
      <div className="App-section-content-form">
        <div onClick={update} className="update">UPDATE</div>
        <Form
          updateKeyword={updateKeyword}
          label={label}
          placeHolder={"bitcoin, ethereum"}
          classError={classError}
          classButton={"button-add-coin"}
        />
      </div>
      <CoinsTable array={coinId} onClick={handleClick} />
      
    </>
    
  );
}




export default CoinsDataTable;
