import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [total, setTotal] = useState(0)
    const [cart, setCart] = useState([])

    return (
        <CartContext.Provider value={{ total, setTotal, cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;