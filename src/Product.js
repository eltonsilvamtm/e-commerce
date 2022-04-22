import React from 'react'
import './Product.css'
import {useStateValue} from "./StateProvider"

function Product({id, title, image, price, rating}) {

    const [{basket}, dispatch] = useStateValue();
    
    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

  return (
    <div className='product'>
    
    <div className='product__info'>
        
        <p>{title}</p>
        <p className='product__price'></p>
        <small>$</small>
        <strong>{price}</strong>
        
        <div className='product__rating' key={rating}>
            {/* creates an array of stars (the number of stars to be rendered is passed by the homepage)*/}
            {Array(rating).fill().map((_,i) => (<p>⭐</p>))}
            </div>
    </div>

    <img src={image} alt=''/>

    <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product