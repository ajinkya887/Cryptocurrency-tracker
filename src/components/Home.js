import React from 'react'
import Coin from './Coin';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
      .then(res => {
        setCoins(res.data);
      }).catch(console.error())
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()))
  return (
     <div className="coins-app">
      <div className="coin-search">
        <form id='search'> 
          <input type='text' title='Search Cryptocurrency' placeholder='Search for Cryptocurrency'
          className='coin-input' onChange={handleChange} />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            id={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
       {/* {filteredCoins.map((coin, index) => (
        <Crypto key={index} currency={coin}/>
      ))}  */}
    </div> 
  )
}

export default Home
