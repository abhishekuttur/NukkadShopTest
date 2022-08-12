import React from 'react'

import { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import Shopnow from './Shopnow';

export default function Home() {
    let items = [
        {
            id: 1,
            name: "Bat",
            brand: "MRF",
            barcode: 123,
            quantity: "Present",
            price: 500
        },
        {
            id: 2,
            name: "Ball",
            brand: "Tennise",
            barcode: 456,
            quantity: "Present",
            price: 30
        },
        {
            id: 3,
            name: "Football",
            brand: "Navia",
            barcode: 789,
            quantity: "Present",
            price: 450
        },
        {
            id: 4,
            name: "Studs",
            brand: "Starimpact",
            barcode: 101112,
            quantity: 0,
            price: 600
        }
    ]
    // let navigate=useNavigate()

    let [cart, setCart] = useState(0);

    let [price, setPrice] = useState(0)

    let addcart = (item) => {

        if (item.quantity == 0)
            alert("Sorry out of Stock")
        else {
            if(item.quantity)
            setCart(cart + 1);
            setPrice(price + item.price)

        }
    }

    let clearcart = () => {
        setCart(0);
        setPrice(0);
    }   
    return (
        <div className='home'>
            <nav><hr />
                <Shopnow total={price} cart={cart}/>        
            <button onClick={clearcart}>ClearCart</button>
            </nav> <hr />
            {items.map((item) => (
                <div>
                    <p>Product:{item.name}</p>
                    <p>Quantity:{item.quantity}</p>
                    <p>Brand: {item.brand}</p>
                    <p>Barcode: {item.barcode}</p>
                    <p>Price: Rs.{item.price}</p>
                    <button onClick={() => addcart(item)}>AddtoCart</button>
                </div>)

            )}

        </div>
    )
}