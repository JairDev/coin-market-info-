import React from "react"
import "./InfoTitle.css"

function InfoTitle({spanTitle}) {
  return (
    <div className="content-title-coin">
      <div className="content-no-flip-text">
      <span>{spanTitle}</span>
        <span className="text-flip">ETH</span>
        <span className="text-flip">XRP</span>
        <span className="text-flip">BTC</span>
        <span className="text-flip">BNB</span>
        <span className="text-flip">ETH</span>
        <span className="text-flip">XRP</span>
        <span className="text-flip">BTC</span>
        <span className="text-flip">BNB</span>
      </div>
    </div>
  )
}

export default InfoTitle