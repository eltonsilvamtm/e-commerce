import React from 'react'
import './Checkout.scss'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import {useStateValue} from './StateProvider'


function Checkout() {
    const [{basket}, dispatch] = useStateValue();
  return (
    
    <div className="checkout">

        <div className="checkout__left">
            <img className="checkout__ad" src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt=""/>
        </div>

        <div>
            <h2 className="checkout__title">Your shopping Basket</h2>
            {basket.map(item => (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />))}

        </div>

        <div className="checkout__right">
            <Subtotal />
        </div>

    </div>
  )
}

export default Checkout