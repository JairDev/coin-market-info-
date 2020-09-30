import React from "react"
import "./Form.css"
import ButtonAdd from "../ButtonAdd"

function Form(props) {
  const {
    onSubmit,
    onChange,
    value,
    label,
    placeHolder,
    classButton,
    classError
  } = props

  return (
    <form className={`form-data`} onSubmit={onSubmit} aria-label="add new currency">
      <div className="App-section-coin-content-input">
        <label>
          <span>{label}</span>
          <div className={`App-section-coin-content-input-button ${classError}`} tooltip="Data not found...">
            <input className="form-input" type="text" value={value} onChange={onChange} placeholder={`E.g ${placeHolder}`}></input>
            <ButtonAdd classButton={classButton}/>
          </div>
        </label>
      </div>
    </form>
  )
}

export default Form