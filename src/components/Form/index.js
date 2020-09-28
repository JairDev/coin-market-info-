import React from "react"
import "./Form.css"
import ButtonAdd from "../ButtonAdd"

function Form(props) {
  const {
    onSubmit,
    onChange,
    value,
    textSpan,
    placeHolder,
    classButton,
    classError
  } = props
  return (
    <form className={`form-data`} onSubmit={onSubmit}>
      <div className="App-section-coin-content-input">
        <label>
          <span>{textSpan}</span>
          <div className={`App-section-coin-content-input-button ${classError}`} tooltip="Data not found..." classActive={`${classError}`}>
            <input className="form-input" type="text" value={value} onChange={onChange} placeholder={`E.g ${placeHolder}`}></input>
            <ButtonAdd classButton={classButton}/>
          </div>
        </label>
      </div>
    </form>
  )
}

export default Form