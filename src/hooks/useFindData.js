import { useEffect, useState } from "react";
import { urlTable } from "../services/ApiUrl";
import getDataFetch from "../services/index";

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
