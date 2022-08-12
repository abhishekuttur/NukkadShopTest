import React from 'react'

export default function Buynow() {
  return (
    <div className='buynow'>
        <label>Card Name: </label><input type="text" placeholder='Card name'/><br />
        <label>Card number: </label><input type="number" placeholder='Number' /><br />
        <label>IFSC Code: </label><input type="number" placeholder='IFCS Code' /><br />
        <button>Buy now</button>
    </div>
  )
}
