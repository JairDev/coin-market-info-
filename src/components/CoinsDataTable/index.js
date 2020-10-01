import React, { useEffect, useState, useCallback } from "react";
import getDataFetch from "../../services/index";
import CoinsTable from "../CoinsTable";
import useStateSaveWord from "../../hooks/useStateSaveWord";
import Form from "../../components/Form";

function CoinsDataTable(props) {
  const {
    keyword = "bitcoin",
    label,
    value,
    updateKeyword,
    handleChange,
  } = props;

  const [localKeyword, setLocalKeyword] = useStateSaveWord();
  const [coinId, setCoinID] = useState([]);
  const [arrayCoins, setArrayCoins] = useState([]);
  const [classError, setClassError] = useState("");
  const urlTable = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

  useEffect(() => {
    setLocalKeyword((prev) => {
      const findWord = prev.findIndex((word) => word === keyword);
      if (findWord === -1) {
        return [...prev, keyword];
      } else {
        return [...prev];
      }
    });
    async function getDataCoinId() {
      const data = await getDataFetch(urlTable);
      setArrayCoins(data);
      const find = data.find((coin) => coin.id === keyword);
      if (!find) {
        setClassError("error");
        setTimeout(() => {
          setClassError("");
        }, 800);
        return;
      }
      setCoinID((prev) => {
        const findIdx = prev.findIndex((item) => item.id === keyword);
        if (findIdx === -1) {
          return [...prev, find];
        } else {
          return [...prev];
        }
      });
    }
    getDataCoinId().catch((error) => {throw new Error(error)});
  }, [keyword, setCoinID, setLocalKeyword, urlTable]);

  useEffect(() => {
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
  }, [localKeyword, urlTable, arrayCoins]);

  // const onClick = (id) => {
  //   const copyArray = [...coinId];
  //   const copyArrayKeyword = [...localKeyword];
  //   const index = copyArray.findIndex((item) => item.name === id);
  //   const indexWord = copyArrayKeyword.findIndex(
  //     (item) => item === id.toLowerCase()
  //   );
  //   copyArray.splice(index, 1);
  //   copyArrayKeyword.splice(indexWord, 1);
  //   setLocalKeyword(copyArrayKeyword);
  //   setCoinID(copyArray);
  // };
  const onClick = useCallback((id) => {
    const copyArray = [...coinId];
    const copyArrayKeyword = [...localKeyword];
    const index = copyArray.findIndex((item) => item.name === id);
    const indexWord = copyArrayKeyword.findIndex(
      (item) => item === id.toLowerCase()
    );
    copyArray.splice(index, 1);
    copyArrayKeyword.splice(indexWord, 1);
    setLocalKeyword(copyArrayKeyword);
    setCoinID(copyArray);
  },[coinId, localKeyword, setLocalKeyword]);

  console.log("-")
  return (
    <>
      <div className="App-section-content-form">
        <Form
          updateKeyword={updateKeyword}
          onChange={handleChange}
          value={value}
          label={label}
          placeHolder={"bitcoin, ethereum"}
          classError={classError}
          classButton={"button-add-coin"}
        />
      </div>
      <CoinsTable array={coinId} onClick={onClick}/>
    </>
  );
}

export default CoinsDataTable;
