import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [total, setTotal] = useState(0)
    const [cart, setCart] = useState([])

    const handleclick2 = (name, price, img, id) => {

        const pizzaToAdd = {
            id: id,
            name: name,
            price: price,
            count: 1,
            img: img,
        }

        setCart([...cart, pizzaToAdd]);
        setTotal(total + price);
    }

    const minusPizza2 = (price, id) => {
        const index = cart.findIndex(pizza => pizza.id === id);

        if (cart[index].count - 1 < 0) {
            return
        }

        let newCart = cart;
        newCart.map(cartItem => (cartItem.id === cart[index].id ? (cartItem.count -= 1) : null));

        if (cart[index].count === 0) {
            newCart.splice(index, 1);
        } 

        setCart(newCart);
        setTotal(total - price)
    }

    const plusPizza2 = (price, id) => {
        const index = cart.findIndex(pizza => pizza.id === id);

        let newCart = cart;
        newCart.map(cartItem => (cartItem.id === cart[index].id ? (cartItem.count += 1) : null));

        setCart(newCart);
        setTotal(total + price)
    }

    return (
        <CartContext.Provider
            value={{
                total, setTotal,
                cart, setCart,
                handleclick2,
                minusPizza2, plusPizza2
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;