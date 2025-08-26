import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CapitalizeFirstLetter from '../../components/CapitalizeFirstLetter/CapitalizeFirstLetter';
import { UserContext } from '../../context/UserContext';
import Swal from 'sweetalert2'

const Cart = () => {

    const { total, setTotal, cart, setCart } = useContext(CartContext)
    const { tokenJwt } = useContext(UserContext)

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

    const sendCart = async () => {
        const token_jwt = localStorage.getItem("token_jwt")

        try {
            const response = await fetch("http://localhost:5000/api/checkouts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token_jwt}`
                },
                body: JSON.stringify({ cart })
            })

            if (!response.ok) {
                console.log("error al enviar carrito")
            }

            if (response.ok) {
                Swal.fire({
                    title: "Pedido Enviado",
                    text: "Su pedido ha sido registrado correctamente.",
                    icon: "success"
                })
                setCart([])
                setTotal(0)
            }

        } catch (error) {
            console.log("error: ", error)
        }
    }


    return (
        <div className="m-2 d-flex flex-column align-items-center">
            <h3>Detalles del pedido:</h3>

            {cart.map(pizza => (
                <div key={pizza.id}>
                    <div className="d-flex align-items-center m-3 gap-4">
                        <img src={pizza.img} className="pizza-cart" />
                        <h4 className="pizza-name">{<CapitalizeFirstLetter word={pizza.name} />}</h4>
                        <span className="fw-bold">${pizza.price.toLocaleString("es-ES", { useGrouping: true })}</span>
                        <Button variant="danger" onClick={() => minusPizza(pizza)}><FontAwesomeIcon icon={faMinus} /></Button>
                        <span>{pizza.count}</span>
                        <Button variant="success" onClick={() => plusPizza(pizza)}><FontAwesomeIcon icon={faPlus} /></Button>

                    </div>
                </div>
            ))}
            {
                total === 0 ? <p className="text-secondary my-5" >Tu carrito está vacío.</p> : null
            }

            <div className="d-flex flex-column align-content-center">

                <h2>Total: ${total.toLocaleString("es-ES", { useGrouping: true })}</h2>
                <Button disabled={!tokenJwt} onClick={sendCart}>Pagar</Button>
            </div>
        </div>
    )
}

export default Cart