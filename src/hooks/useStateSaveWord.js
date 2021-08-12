import { useState, useEffect } from "react";

function useStateSaveWord() {
  const [localKeyword, setLocalKeyword] = useState(
    JSON.parse(localStorage.getItem("coin")) || []
  );
  useEffect(() => {
    localStorage.setItem("coin", JSON.stringify(localKeyword));
  }, [localKeyword]);

  return [localKeyword, setLocalKeyword];
}

export default useStateSaveWord;
