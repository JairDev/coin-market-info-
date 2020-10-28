import React from "react"
import "./TrTable.css"

function TrTable({item, onClick}) {
  const fixedPercentage = item.price_change_percentage_24h.toFixed(2)
  const classPercentage = fixedPercentage < 0 ? "low-percentage" : "high-percentage"
  console.log(item)
  if(!item) console.log("not")
  if(item) {
    return (
      <tr className={`App-section-coin-table-coin ro`}>
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
          <div className="remove" onClick={() => onClick(item.id)} data-id={item.id}>
            <span>
              <svg className="icon icon-cancel-circle">
                <use xlinkHref="#icon-cancel-circle"></use>
              </svg>
            </span>
          </div>
        </td>
      </tr>
    )
  }else {
    return (
      <tr>
        <div>Empty chart</div>
      </tr>
    )
  }
}

export default TrTable