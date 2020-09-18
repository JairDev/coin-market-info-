import React from "react"
import "./TrTable.css"

function TrTable({item, onClick}) {
  const id = item.name
  const fixedPercentage = item.market_data.price_change_percentage_24h.toFixed(2)
  const classPercentage = fixedPercentage < 0 ? "low-percentage" : "high-percentage"
  return (
    <tr className={`App-section-coin-table-${item.name}`}>
      <td>
        <div>
          {item.market_cap_rank}
        </div>
      </td>
      <td>
        <div className="App-section-coin-table-coindata">
          <div className="App-section-coin-table-coindata-img"><img src={item.image.thumb} alt=""></img></div>
          <span>
            {item.name}
          </span>
        </div>
      </td>
      <td>
        <div>
          ${item.market_data.market_cap.usd}
        </div>
      </td>
      <td>
        <div>
          ${item.market_data.current_price.usd}
        </div>
      </td>
      <td>
        <div className={classPercentage}>
          {fixedPercentage}%
        </div>
        <div className="remove" onClick={() => onClick(item.name)} data-id={item.name}>
          <span>X</span>
        </div>
      </td>
    
    </tr>
  )
}

export default TrTable