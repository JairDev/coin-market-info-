import React from "react"
import "./CoinStrip.css"

function CoinStrip({item}) {
  const fixedPercentage = item.price_change_percentage_24h.toFixed(2)
  const classPercentage = fixedPercentage < 0 ? "low-percentage" : "high-percentage"
  
  return (
    <div className="parent-content-coins">
      <div className="content-coins">
        <div className="img-coin-band"> 
          <div className="content-img-coin-band">
            <img alt="" src={item.image} />
          </div>
          <div className="coin-name"><span>{item.id}</span></div>
        </div>
        <span className="coin-price">${item.current_price}</span>
        <span className={classPercentage}>{fixedPercentage}%</span>
      </div>
    </div>
  )
}

export default CoinStrip