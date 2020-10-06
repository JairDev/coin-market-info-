import React, { useEffect, useCallback} from "react";
import CoinsTable from "../CoinsTable";
import useStateSaveWord from "../../hooks/useStateSaveWord";
import Form from "../../components/Form";
import useFindData from "../../hooks/useFindData"

function CoinsDataTable({keyword, label, updateKeyword}) {
  const { coinId, setCoinID, arrayCoins } = useFindData({keyword})
  const [localKeyword, setLocalKeyword] = useStateSaveWord();

  useEffect(() => {
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


  const onClick = useCallback((id) => {
    const copyArrayCoin = [...coinId];
    const copyArrayKeyword = [...localKeyword];
    const index = copyArrayCoin.findIndex((item) => item.name === id);
    const indexWord = copyArrayKeyword.findIndex(
      (item) => item === id.toLowerCase()
    );
    copyArrayCoin.splice(index, 1);
    copyArrayKeyword.splice(indexWord, 1);
    setLocalKeyword(copyArrayKeyword);
    setCoinID(copyArrayCoin);
  },[coinId, localKeyword, setCoinID, setLocalKeyword]);

  // console.log("-")
  return (
    <>
      <div className="App-section-content-form">
        <Form
          updateKeyword={updateKeyword}
          label={label}
          placeHolder={"bitcoin, ethereum"}
          // classError={classError}
          classButton={"button-add-coin"}
        />
      </div>
      <CoinsTable array={coinId} onClick={onClick}/>

    </>
  );
}

export default CoinsDataTable;
