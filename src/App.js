import './App.css';
import { Routes, Route } from 'react-router-dom';


import Crypto from './components/Crypto'
import Home from './components/Home';

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/:id' element={<Crypto/>} >
      </Route>
    </Routes>

    // <div className="coins-app">
    //   <div className="coin-search">
    //     <form id='search'> 
    //       <input type='text' placeholder='Search for Cryptocurrency'
    //       className='coin-input' onChange={handleChange} />
    //     </form>
    //   </div>
    //   {filteredCoins.map(coin => {
    //     return (
    //       <Coin
    //         key={coin.id}
    //         name={coin.name}
    //         image={coin.image}
    //         symbol={coin.symbol}
    //         marketcap={coin.market_cap}
    //         price={coin.current_price}
    //         priceChange={coin.price_change_percentage_24h}
    //         volume={coin.total_volume}
    //       />
    //     );
    //   })}
    //   {/* {filteredCoins.map((coin, index) => (
    //     <Crypto key={index} currency={coin}/>
    //   ))} */}
    // </div>
  );
}

export default App;
