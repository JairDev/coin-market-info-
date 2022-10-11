import React from "react";
import "./TrTable.css";

function TrTable({ item, onClick }) {
  const formatPrice = new Intl.NumberFormat().format(item.current_price);
  const fixedPercentage = item.price_change_percentage_24h.toFixed(2);
  const classPercentage =
    fixedPercentage < 0 ? "low-percentage" : "high-percentage";
  const formatMarketCap = new Intl.NumberFormat().format(item.market_cap);

  return (
    <tr className="App-section-coin-table-coin ro">
      <td>
        <div>{item.market_cap_rank}</div>
      </td>
      <td>
        <div className="App-section-coin-table-coindata">
          <div className="App-section-coin-table-coindata-img">
            <img src={item.image} alt=""></img>
          </div>
          <span>{item.name}</span>
        </div>
      </td>
      <td>
        <div>${formatMarketCap}</div>
      </td>
      <td>
        <div>${formatPrice}</div>
      </td>
      <td>
        <div className={classPercentage}>{fixedPercentage}%</div>
        <div
          className="remove"
          onClick={() => onClick(item.id)}
          data-id={item.id}
        >
          <span>
            <svg className="icon icon-cancel-circle">
              <use xlinkHref="#icon-cancel-circle"></use>
            </svg>
          </span>
        </div>
      </td>
    </tr>
  );
}

export default TrTable;
