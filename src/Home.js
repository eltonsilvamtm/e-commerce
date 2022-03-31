import React from 'react';
import './Home.css';
import Product from './Product.js'

function Home() {
  return (
    <div className='home'>
       <div className='home__container'>
           <img className='home__image' src='https://miro.medium.com/max/1400/1*mGTmyACkQP5XRSdDuFizLg.png' alt=''/>
        
        <div className='home__row'>
            <Product 
                id= "3215683"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                price={29.99}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/81RCff1NpnL.jpg"
            />

            <Product
                id= "412578962"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with k-bater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={239.00}
                rating={4}
                image= "https://m.media-amazon.com/images/I/51G7m-1kmsS._AC_SX425_.jpg"
            />
        </div>

        <div className='home__row'>
            <Product
                id= "3215683"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={199.99}
                rating={3}
                image= "https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SX450_.jpg"
            />

            <Product
                id= "87733648"
                title="Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"
                price={98.99}
                rating={5}
                image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5zye2K3Le8vyxeJy5G6pFerDxJqfNi8LLQ&usqp=CAU"
            />
            
            <Product
                id= "951387841"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4}
                image= "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-11-select-cell-silver-202104_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&.v=1617126612000"
            />
        </div>

        <div className='home__row'>
            {/* Product */}
        </div>

        </div> 
    </div>
  )
}

export default Home;