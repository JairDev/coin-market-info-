import { useEffect, useRef, useState } from "react";
import getDataFetch from "../services/index";

const urlTable = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
const urlCoinId = (word) =>
  `https://api.coingecko.com/api/v3/coins/${word}?tickers=false&community_data=false&developer_data=false&sparkline=false`;

function useFindData({ keyword }) {
  const [coinId, setCoinID] = useState([]);
  const [arrayCoins, setArrayCoins] = useState([]);
  const [classError, setClassError] = useState("");

  useEffect(() => {
    async function getDataCoinId() {
      const data = await getDataFetch(urlTable);
      setArrayCoins(data);
      const find = data.find((coin) => coin.id === keyword);
      if (keyword && !find) {
        setClassError("error");
        setTimeout(() => {
          setClassError("");
        }, 800);
        return;
      }
      if (keyword) {
        setCoinID((prev) => {
          const findIdx = prev.findIndex((item) => item.id === keyword);
          if (findIdx === -1) {
            return [...prev, find];
          } else {
            return [...prev];
          }
        });
      }
    }
    getDataCoinId().catch((error) => {
      throw new Error(error);
    });
  }, [keyword]);

  return { coinId, setCoinID, arrayCoins, classError };
}

export default useFindData;
