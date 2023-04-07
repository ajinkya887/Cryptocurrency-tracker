import { useState, useEffect } from 'react'
import './Crypto.css'

import axios from 'axios'
import { useParams } from 'react-router-dom'

const Crypto = () => {
  const [coins, setCoins] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
      .then(res => {
        setCoins(res.data);
      }).catch(console.error())
  }, []);

  const coin = coins?.find((item) => {
    return item.id === id
  })


  return (
    <main>
      <div className='context'>
        <p className='coin-name'>{coin?.name.toUpperCase()}</p>
        <img className='img' src={coin?.image} />
        <p className='list'>Coin Symbol: {coin?.symbol}</p>
        <p className='list'>Current Price: $ {coin?.current_price} </p>
        <p className='list'>Market Rank: {coin?.market_cap_rank.toLocaleString()}</p>
        <p className='list'>Market Capital: $ {coin?.market_cap} </p>
        <p className='list'>Highest Of Past 24hr: $ {coin?.high_24h}</p>
        <p className='list'>Lowest Of Past 24hr: $ {coin?.low_24h}</p>
        {coin?.price_change_24h < 0 ? (
          <p className='list-red'>Price Change In 24hr: $ {coin?.price_change_24h.toFixed(2)}</p>
        ) : (
          <p className='list-green'>Price Change In 24hr: $ {coin?.price_change_24h.toFixed(2)}</p>
        )}

        {coin?.price_change_percentage_24h < 0 ? (
          <p className='list-red'>Price Change (%) In 24hr: {coin?.price_change_percentage_24h.toFixed(2)}</p>
        ) : (
          <p className='list-green'>Price Change (%) In 24hr: {coin?.price_change_percentage_24h.toFixed(2)}</p>
        )}

        {coin?.market_cap_change_24h < 0 ? (
          <p className='list-red'>Price Change In 24hr: $ {coin?.market_cap_change_24h.toFixed(2)}</p>
        ) : (
          <p className='list-green'>Price Change In 24hr: $ {coin?.market_cap_change_24h.toFixed(2)}</p>
        )}

        {coin?.market_cap_change_percentage_24h < 0 ? (
          <p className='list-red'>Price Change (%) In 24hr: {coin?.market_cap_change_percentage_24h.toFixed(2)}</p>
        ) : (
          <p className='list-green'>Price Change (%) In 24hr: {coin?.market_cap_change_percentage_24h.toFixed(2)}</p>
        )}

        <p className='list'>Total Volume: {coin?.total_volume}</p>
        <p className='list'>Last Updated: {coin?.last_updated}</p>
      </div>
      <div className="area" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
    </main>
  )
}

export default Crypto
