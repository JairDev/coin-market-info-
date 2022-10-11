import React, { useState } from "react";
import "./Form.css";

function Form({
  updateKeyword,
  label,
  id,
  placeHolder,
  classButton,
  classError,
}) {
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
      className="form-data"
      onSubmit={handleSubmit}
      aria-label="add new currency"
    >
      <div className="App-section-coin-content-input">
        <label htmlFor={id}>
          <span>{label}</span>
        </label>
        <div
          className={`App-section-coin-content-input-button  ${classError}`}
          classactive={classError}
          tooltip="Data not found..."
        >
          <input
            id={id}
            className="form-input"
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={`E.g ${placeHolder}`}
          />
          <button className="button">
            <svg className="icon icon-plus">
              <use xlinkHref="#icon-plus"></use>
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}

export default React.memo(Form);
