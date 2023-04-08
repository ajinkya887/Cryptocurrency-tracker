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
        <table>
          <tr >
            <td className='list'>Coin Symbol</td>
            <td className='list'>:  {coin?.symbol} </td>
          </tr>
          <tr>
            <td className='list'>Current Price</td>
            <td className='list'>: $ {coin?.current_price}</td>
          </tr>
          <tr>
            <td className='list'>Market Rank</td>
            <td className='list'>: {coin?.market_cap_rank.toLocaleString()}</td>
          </tr>
          <tr>
            <td className='list'>Market Capital</td>
            <td className='list'>: $ {coin?.market_cap}</td>
          </tr>
          <tr>
            <td className='list'>Highest Of Past 24hr</td>
            <td className='list'>: $ {coin?.high_24h}</td>
          </tr>
          <tr>
            <td className='list'>Lowest Of Past 24hr</td>
            <td className='list'>: $ {coin?.low_24h}</td>
          </tr>
          <tr>
            <td className='list'>Price Change In 24hr</td>
            <td>{coin?.price_change_24h < 0 ? (
              <p className='list-red'>: $ {coin?.price_change_24h.toFixed(2)}</p>
            ) : (
              <p className='list-green'>: $ {coin?.price_change_24h.toFixed(2)}</p>
            )}</td>
          </tr>
          <tr>
            <td className='list'>Price Change (%) In 24hr</td>
            <td>{coin?.price_change_percentage_24h < 0 ? (
              <p className='list-red'>: {coin?.price_change_percentage_24h.toFixed(2)}</p>
            ) : (
              <p className='list-green'>: {coin?.price_change_percentage_24h.toFixed(2)}</p>
            )}</td>
          </tr>
          <tr>
            <td className='list'>Price Change In Market Cap (24hr)</td>
            <td>{coin?.market_cap_change_24h < 0 ? (
              <p className='list-red'>: $ {coin?.market_cap_change_24h.toFixed(2)}</p>
            ) : (
              <p className='list-green'>: $ {coin?.market_cap_change_24h.toFixed(2)}</p>
            )}</td>
          </tr>
          <tr>
            <td className='list'>Price Change (%) In Market Cap (24hr)</td>
            <td>{coin?.market_cap_change_percentage_24h < 0 ? (
              <p className='list-red'>: {coin?.market_cap_change_percentage_24h.toFixed(2)}</p>
            ) : (
              <p className='list-green'>: {coin?.market_cap_change_percentage_24h.toFixed(2)}</p>
            )}</td>
          </tr>
          <tr>
            <td className='list'>Total Volume</td>
            <td className='list'>: {coin?.total_volume}</td>
          </tr>
          <tr>
            <td className='list'>Last Updated</td>
            <td className='list'>: {coin?.last_updated}</td>
          </tr>
        </table>
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
