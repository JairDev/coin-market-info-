import React from "react";
import IterateArray from "../../utils/IterateArray";
import TrTable from "../TrTable";
import "./CoinsTable.css";

function CoinsTable({ array, onClick }) {
  return (
    <div className="App-section-coin-info">
      <div className="toBottom">
        <svg className="icon icon-ctrl">
          <use xlinkHref="#icon-ctrl"></use>
        </svg>
        <svg className="icon icon-ctrl">
          <use xlinkHref="#icon-ctrl"></use>
        </svg>
        <svg className="icon icon-ctrl">
          <use xlinkHref="#icon-ctrl"></use>
        </svg>
      </div>
      <table className="App-section-coin-table">
        <thead>
          <tr>
            <th>
              <div>
                <span>Rank</span>
              </div>
            </th>
            <th>
              <div>
                <span className="coin-table-name-head">Name</span>
              </div>
            </th>
            <th>
              <div>
                <span>Market Cap</span>
              </div>
            </th>
            <th>
              <div>
                <span>Price</span>
              </div>
            </th>
            <th>
              <div>
                <span>Change (24h)</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {!array.length ? (
            <tr className="empty-chart">
              <th>Add a coin...</th>
            </tr>
          ) : (
            <IterateArray
              array={array}
              property={"id"}
              onClick={onClick}
              Component={TrTable}
            />
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CoinsTable;
