import {React, useState} from 'react'
import './Subtotal.scss'
import CurrencyFormat from "react-currency-format"
import {useStateValue} from "./StateProvider"
import {getBasketTotal} from "./reducer"
import {useNavigate} from 'react-router-dom'

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true);
    
    // function handlePriceChange(value) {
    //     console.log(value)
    //     if(value > 0){
    //         setDisabled(false);
    //     }
    //disabled={disabled}
        
    //   };
    
    
    //   const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert(`Your state values: \n 
    //             text: ${text} \n 
    //             You can replace this alert with your process`);
    //   };

  return (
    <div className="subtotal">
        <CurrencyFormat
            renderText={(value) => (
                <>
                <p>
                Subtotal ({basket?.length} items):
                <strong>{value}</strong> 
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox"/>This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"€"}
            //onValueChange={(values) => {handlePriceChange(values)}}
        />
        

        
        <button onClick={e => navigate('/payment')} className="subtotal__button">Proceed to Checkout
            </button>
    </div>
  )
}

export default Subtotal