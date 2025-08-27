import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [total, setTotal] = useState(0)
    const [cart, setCart] = useState([])
    const [pizzaCount, setPizzaCount] = useState(0)

    const handleclick2 = (name, price, img, id) => {

        const index = cart.findIndex(pizza => pizza.id === id);

        index === -1 ? (setPizzaCount(0)) : (setPizzaCount(cart[index].count));

        const pizzaToAdd = {
            id: id,
            name: name,
            price: price,
            count: 1,
            img: img,
        }

        setCart([...cart, pizzaToAdd]);
        setPizzaCount(1);
        setTotal(total + price);
    }

    const minusPizza2 = (price, id) => {
        const index = cart.findIndex(pizza => pizza.id === id);

        console.log("cart[index].count: ", cart[index].count || 0)

        if (cart[index].count - 1 < 0) {
            return
        }

        let newCart = cart;
        newCart.map(cartItem => (cartItem.id === cart[index].id ? (cartItem.count -= 1) : null));

        let finalCount;
        if (cart[index].count === 0) {
            newCart.splice(index, 1);
            finalCount = 0;
        } else {
            finalCount = cart[index].count;
        }

        console.log("count AFTER: ", finalCount)


        setCart(newCart);
        setPizzaCount(finalCount)
        setTotal(total - price)
    }

    const plusPizza2 = (price, id) => {
        const index = cart.findIndex(pizza => pizza.id === id);

        let newCart = cart;
        newCart.map(cartItem => (cartItem.id === cart[index].id ? (cartItem.count += 1) : null));

        setCart(newCart);
        setPizzaCount(cart[index].count);
        setTotal(total + price)
    }

    return (
        <CartContext.Provider
            value={{
                total, setTotal,
                cart, setCart,
                pizzaCount, setPizzaCount,
                handleclick2,
                minusPizza2, plusPizza2
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;