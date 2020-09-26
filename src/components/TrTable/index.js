import React, { useEffect, useState } from "react"
import "./TrTable.css"

function TrTable({item, onClick, keyword}) {
  const fixedPercentage = item.price_change_percentage_24h.toFixed(2)
  const classPercentage = fixedPercentage < 0 ? "low-percentage" : "high-percentage"
  // console.log(keyword)
  const [className, setClasName] = useState("")

  useEffect(() => {
    console.log("add effetct")
    setClasName("ro")
  }, [keyword])

  return (
    <tr className={`App-section-coin-table-coin ${className}`}>
      <td>
        <div>
          {item.market_cap_rank}
        </div>
      </td>
      <td>
        <div className="App-section-coin-table-coindata">
          <div className="App-section-coin-table-coindata-img"><img src={item.image} alt=""></img></div>
          <span>
            {item.name}
          </span>
        </div>
      </td>
      <td>
        <div>
          ${item.market_cap}
        </div>
      </td>
      <td>
        <div>
          ${item.current_price}
        </div>
      </td>
      <td>
        <div className={classPercentage}>
          {fixedPercentage}%
        </div>
        <div className="remove" onClick={() => onClick(item.name)} data-id={item.name}>
          <span>
            <svg className="icon icon-cancel-circle">
              <use xlinkHref="#icon-cancel-circle"></use>
            </svg>
          </span>
        </div>
      </td>
    
    </tr>
  )
}

export default TrTable