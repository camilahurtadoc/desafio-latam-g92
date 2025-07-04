import { pizzaCart } from "../../assets/js/pizzas"
import Button from 'react-bootstrap/Button';
import './Cart.css'
import { useState } from "react";

const Cart = () => {

    const capitalizeFirstLetter = (word) => {
        const firstLetterCapt = word.charAt(0).toUpperCase()
        const otherLetters = word.slice(1)
        return firstLetterCapt + otherLetters
    }

    const [cart, setCart] = useState(pizzaCart)

    let startingTotal = 0
    pizzaCart.map(pizza => startingTotal += pizza.count * pizza.price)

    const [total, settotal] = useState(startingTotal)

    const minusPizza = (pizza) => {
        if (pizza.count - 1 < 0) {
            return
        }

        let newCart = cart
        newCart.map(cartItem => (cartItem.id === pizza.id ? (cartItem.count -= 1) : null))

        setCart(newCart)
        settotal(total - pizza.price)
    }

    const plusPizza = (pizza) => {

        let newCart = cart
        newCart.map(cartItem => (cartItem.id === pizza.id ? (cartItem.count += 1) : null))

        setCart(newCart)
        settotal(total + pizza.price)
    }


    return (
        <div className="m-2">
            <h3 className="ps-5">Detalles del pedido:</h3>

            {cart.map(pizza => (
                <div key={pizza.id}>
                    {
                        pizza.count > 0 ? (
                            <div className="d-flex align-items-center m-4 ps-5 gap-4">

                                <img src={pizza.img} className="pizza-cart" />
                                <h4 className="pizza-name">{capitalizeFirstLetter(pizza.name)}</h4>
                                <span className="fw-bold">${pizza.price.toLocaleString("es-ES", { useGrouping: true })}</span>
                                <Button variant="danger" onClick={() => minusPizza(pizza)}>-</Button>
                                <span>{pizza.count}</span>
                                <Button variant="success" onClick={() => plusPizza(pizza)}>+</Button>

                            </div>
                        ) : null
                    }

                </div>
            ))}

            <div className="ps-5">

            <h2>Total: ${total.toLocaleString("es-ES", { useGrouping: true })}</h2>
            <Button>Pagar</Button>
            </div>
        </div>
    )
}

export default Cart