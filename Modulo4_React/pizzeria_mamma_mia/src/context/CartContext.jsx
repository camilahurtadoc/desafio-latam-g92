import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [total, setTotal] = useState(0)

    return (
        <CartContext.Provider value={{ total, setTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;