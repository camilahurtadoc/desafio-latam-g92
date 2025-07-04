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

    let startingTotal = 0
    const startingTotalArray = pizzaCart.map(pizza => startingTotal += pizza.count * pizza.price)


    const [counterPizza, setCounterPizza] = useState(1)
    const [total, settotal] = useState(startingTotal)

    const minusPizza = (pizza) => {
        if (counterPizza - 1 < 0) {
            return
        }
        setCounterPizza(counterPizza - 1)
        settotal(total - pizza.price)
    }

    const plusPizza = (pizza) => {
        setCounterPizza(counterPizza + 1)
        settotal(total + pizza.price)
    }

    const pizzaCartDisplay = pizzaCart.map(item =>





        <div key={item.id} className="d-flex align-items-center m-4 ps-5 gap-4">
            <img src={item.img} className="pizza-cart" />
            <h4 className="pizza-name">{capitalizeFirstLetter(item.name)}</h4>
            <span className="fw-bold">${item.price.toLocaleString("es-ES", { useGrouping: true })}</span>
            <Button variant="danger" onClick={() => minusPizza(item)}>-</Button>
            <span>{counterPizza}</span>
            <Button variant="success" onClick={() => plusPizza(item)}>+</Button>
        </div>



    )

    return (
        <div className="m-2">
            <h3>Detalles del pedido:</h3>
            
                {pizzaCart.map(item => (
                    <div key={item.id}>
                        {
                            counterPizza > 0 ? (
                                <div className="d-flex align-items-center m-4 ps-5 gap-4">

                                    <img src={item.img} className="pizza-cart" />
                                    <h4 className="pizza-name">{capitalizeFirstLetter(item.name)}</h4>
                                    <span className="fw-bold">${item.price.toLocaleString("es-ES", { useGrouping: true })}</span>
                                    <Button variant="danger" onClick={() => minusPizza(item)}>-</Button>
                                    <span>{counterPizza}</span>
                                    <Button variant="success" onClick={() => plusPizza(item)}>+</Button>

                                </div>
                            ) : null
                        }

                    </div>
                ))}
            

            <h2>Total: ${total.toLocaleString("es-ES", { useGrouping: true })}</h2>
            <Button>Pagar</Button>
        </div>
    )
}

export default Cart