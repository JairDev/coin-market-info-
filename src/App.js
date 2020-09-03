import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-header-nav">
          <div>Logo</div>
          <div><a href="#">Converter</a></div>
        </nav>
      </header>
      <section className="App-section-headband">
        <div>Price Coin</div>
      </section>

      <section className="App-section-coin-info">
        <div>
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div>
                    Name
                  </div>
                </td>
                <td>
                  <div>
                    Price
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="App-section-news">
        <div>News</div>
        <div>News</div>
      </section>
    </div>
  );
}

export default App;
