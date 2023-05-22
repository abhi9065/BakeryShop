import {createContext, useState} from "react"

export const CartContext  = createContext()

export function CartProvider({children}){

const [cart , setCart] = useState([])


function handleClickUpdate(item){
    setCart(cart => [...cart , item])
    
}


function handleClickUpdateToWishlist(item){
    setCart(cart => [...cart , item])
    
}

const removeFromCart = (productId) => {
    setCart(prevItems => prevItems.filter(item => item.id !== productId))
}

    return (
        <>
        <CartContext.Provider  value={{cart , handleClickUpdate ,handleClickUpdateToWishlist, removeFromCart}}>
        {children}
        </CartContext.Provider>
        </>
    )
}
