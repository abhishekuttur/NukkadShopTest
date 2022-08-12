import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Shopnow(props) {
    let navigate=useNavigate()
  return (
    <div className='cart'>
        <h1>........Cart..........</h1>
        <h1>Items:{props.cart}</h1>
        <h1>Total price: {props.total}</h1>
        
        {props.cart>0 &&<button onClick={()=>{navigate("/buy")}}>Purchase</button> }
    </div>
  )
}
