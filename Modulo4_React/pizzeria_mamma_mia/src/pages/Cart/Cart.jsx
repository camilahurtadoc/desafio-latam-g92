import Button from 'react-bootstrap/Button';
import { pizzaCart } from "../../assets/js/pizzas"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {

    const capitalizeFirstLetter = (word) => {
        const firstLetterCapt = word.charAt(0).toUpperCase()
        const otherLetters = word.slice(1)
        return firstLetterCapt + otherLetters
    }

    const { total, setTotal } = useContext(CartContext)
    const { cart, setCart } = useContext(CartContext)

    // let startingTotal = 0
    // pizzaCart.map(pizza => startingTotal += pizza.count * pizza.price)

    // const [total, settotal] = useState(startingTotal)

    const minusPizza = (pizza) => {
        if (pizza.count - 1 < 0) {
            return
        }

        let newCart = cart
        newCart.map(cartItem => (cartItem.id === pizza.id ? (cartItem.count -= 1) : null))

        const index = cart.findIndex(pizzaItem => pizzaItem.id === pizza.id)
        if (cart[index].count === 0) {
            newCart.splice(index, 1)
        }

        setCart(newCart)
        setTotal(total - pizza.price)
    }

    const plusPizza = (pizza) => {

        let newCart = cart
        newCart.map(cartItem => (cartItem.id === pizza.id ? (cartItem.count += 1) : null))

        setCart(newCart)
        setTotal(total + pizza.price)
    }


    return (
        <div className="m-2 d-flex flex-column align-items-center">
            <h3>Detalles del pedido:</h3>

            {cart.map(pizza => (
                <div key={pizza.id}>
                    {
                        pizza.count > 0 ? (
                            <div className="d-flex align-items-center m-3 gap-4">

                                <img src={pizza.img} className="pizza-cart" />
                                <h4 className="pizza-name">{capitalizeFirstLetter(pizza.name)}</h4>
                                <span className="fw-bold">${pizza.price.toLocaleString("es-ES", { useGrouping: true })}</span>
                                <Button variant="danger" onClick={() => minusPizza(pizza)}><FontAwesomeIcon icon={faMinus} /></Button>
                                <span>{pizza.count}</span>
                                <Button variant="success" onClick={() => plusPizza(pizza)}><FontAwesomeIcon icon={faPlus} /></Button>

                            </div>
                        ) : null
                    }

                </div>
            ))}
            {
                total === 0 ? <p className="text-secondary my-5" >Tu carrito está vacío.</p> : null
            }

            <div className="d-flex flex-column align-content-center">

                <h2>Total: ${total.toLocaleString("es-ES", { useGrouping: true })}</h2>
                <Button>Pagar</Button>
            </div>
        </div>
    )
}

export default Cart