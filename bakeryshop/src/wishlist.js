import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export function Wishlist(){

    const {cart , removeFromCart} = useContext(CartContext);

    function removeCart(item){
        removeFromCart(item)
       }
    return(

        <div className="cart-page">

        <h1 className="cart-heading">Wishlist Items</h1>
    

        <div className="cart-main-listing">
           {
            cart.map(({id,title,src,price}) => (
                <div key={id} className="cart-listing">

                   <img className="cart-image cart" src={src} alt="not found" />
                   <h1 className="cart ">{title}</h1>
                   <h3 className="cart">{price}</h3>

                  <button onClick={()=>{removeCart(id)}}>Remove Wishlist</button>


                </div>
            ))
           }
    
        </div>
        </div>
    )
}