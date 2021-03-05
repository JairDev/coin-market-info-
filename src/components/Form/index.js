import React, { useState } from "react";
import { Button } from "../ButtonAdd";
import "./Form.css";

function Form(props) {
  const { updateKeyword, label, placeHolder, classButton, classError } = props;
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    if (!value) {
      e.preventDefault();
      return;
    }
    updateKeyword(value);
    setValue("");
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form
      className={`form-data`}
      onSubmit={handleSubmit}
      aria-label="add new currency"
    >
      <div className="App-section-coin-content-input">
        <label>
          <span>{label}</span>
          <div
            className={`App-section-coin-content-input-button  ${classError}`}
            classactive={classError}
            tooltip="Data not found..."
          >
            <input
              className="form-input"
              type="text"
              value={value}
              onChange={handleChange}
              placeholder={`E.g ${placeHolder}`}
            ></input>
            <Button className={classButton} primary>
              <svg className="icon icon-plus">
                <use xlinkHref="#icon-plus"></use>
              </svg>
            </Button>
          </div>
        </label>
      </div>
    </form>
  );
}

export default React.memo(Form);
