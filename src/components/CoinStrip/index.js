import React from "react"

function CoinStrip({item}) {
  const fixedPercentage = item.price_change_percentage_24h.toFixed(2)
  const classPercentage = fixedPercentage < 0 ? "low-percentage" : "high-percentage"
  
  return (
    <div className="parent-content-coins">
      <div className="content-coins">
        <div className="img-coin-band"> 
          <img alt="" src={item.image} />
        </div>
        <div className="coin-name">{item.id}</div>
        <span className="coin-price">${item.current_price}</span>
        <span className={classPercentage}>{fixedPercentage}%</span>
        {/* <div className="content-pair-btc">/Pair</div> */}
      </div>
    </div>
  )
}

export default CoinStrip