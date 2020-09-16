import React from "react"

function Form(props) {
  const {
    onSubmit,
    onChange,
    value,
    textSpan,
    textButton,
    placeHolder,
  } = props
  return (
    <form className={`form-data`} onSubmit={onSubmit}>
      <div className="App-section-coin-content-input">
        <label>
          <span>{textSpan}</span>
          <div className="App-section-coin-content-input-button">
            <input type="text" value={value} onChange={onChange} placeholder={`E.g ${placeHolder}`}></input>
            <button className="button-add-coin">
              <svg class="icon icon-plus"><use xlinkHref="#icon-plus"></use></svg>
            </button>
          </div>
        </label>
      </div>
    </form>
  )
}

export default Form