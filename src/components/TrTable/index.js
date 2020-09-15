import React from "react"

function TrTable({item}) {
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
          <div>
            {item.name}
          </div>
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
      </td>
    </tr>
  )
}

export default TrTable