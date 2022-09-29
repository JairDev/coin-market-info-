import React, { useEffect, useCallback } from "react";
import CoinsTable from "../CoinsTable";
import useStateSaveWord from "../../hooks/useStateSaveWord";
import Form from "../../components/Form";
import useFindData from "../../hooks/useFindData";
import getDataFetch from "../../services";
import { filtered } from "../../utils/filtered";
import { urlTable } from "../../services/ApiUrl";
import "./CoinsDataTable.css";

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
    localKeyword.map((word) => {
      const resultFilter = filtered(arrayCoins, word, false);
      setCoinID((prev) => {
        const findIndex = prev.findIndex(({ id }) => id === word);
        if (findIndex === -1) {
          return [...prev, ...resultFilter];
        } else {
          return [...prev];
        }
      });
    });
  }, [localKeyword, arrayCoins, setCoinID]);

  const handleClick = useCallback(
    (name) => {
      updateKeyword("");
      const remainingCoins = filtered(coinId, name, true);
      const remainingWords = localKeyword.filter((item) => item !== name);
      setLocalKeyword(remainingWords);
      setCoinID(remainingCoins);
    },
    [coinId, localKeyword, setCoinID, setLocalKeyword, updateKeyword]
  );

  const update = useCallback(async () => {
    const data = await getDataFetch(urlTable);
    const filter = data.filter((coin) => localKeyword.includes(coin.id));
    setCoinID(filter);
  }, [localKeyword, setCoinID]);

  return (
    <>
      <div className="App-section-content-form">
        <div className="content-form-coins">
          <Form
            updateKeyword={updateKeyword}
            label={label}
            id="name-coin"
            placeHolder={"bitcoin, ethereum"}
            classError={classError}
            classButton={"button-add-coin"}
          />
          <div onClick={update} className="update">
            <span className="refresh">Update coins data</span>
            <span className="content-icon-refresh">
              <svg className="icon icon-loop2">
                <use xlinkHref="#icon-loop2"></use>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <CoinsTable array={coinId} onClick={handleClick} />
    </>
  );
}

export default CoinsDataTable;
