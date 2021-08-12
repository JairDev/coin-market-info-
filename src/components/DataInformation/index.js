import React, { useState } from "react";

function WithDataInformation(Component) {
  return function WithUpdateInformation({ label }) {
    const [keyword, setKeyword] = useState();

    const updateKeyword = (keyword) => setKeyword(keyword);

    return (
      <>
        <Component
          label={label}
          keyword={keyword}
          updateKeyword={updateKeyword}
        />
      </>
    );
  };
}


export default WithDataInformation;
