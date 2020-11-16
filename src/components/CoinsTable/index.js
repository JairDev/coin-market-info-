import React from "react";
import IterateArray from "../../utils/IterateArray";
import TrTable from "../TrTable";
import "./CoinsTable.css";

function CoinsTable({ array, onClick }) {

  return (
    <div className={`App-section-coin-info`}>
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
                <span>Name</span>
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
              <th>Add a coin, buddy...</th>
            </tr>
          ) : (
            <IterateArray
              array={array}
              property={"id"}
              Component={TrTable}
              onClick={onClick}
            />
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CoinsTable;
