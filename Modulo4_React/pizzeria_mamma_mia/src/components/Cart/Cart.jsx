import { pizzaCart } from "../../assets/js/pizzas"
import Button from 'react-bootstrap/Button';
import './Cart.css'

const Cart = () => {

    const capitalizeFirstLetter = (word) => {
    const firstLetterCapt = word.charAt(0).toUpperCase()
    const otherLetters = word.slice(1)
    return firstLetterCapt + otherLetters
  }

  return (
    <div className="m-2">
        <h3>Detalles del pedido:</h3>
        {pizzaCart.map(item => (
            <div key={item.id} className="d-flex align-items-center m-4 gap-4">
                <img src={item.img} className="pizza-cart"/>
                <h4 className="pizza-name">{capitalizeFirstLetter(item.name)}</h4>
                <span className="fw-bold">${item.price.toLocaleString("es-ES", { useGrouping: true })}</span>
                <Button variant="danger">-</Button>
                <span>{item.count}</span>
                <Button variant="success">+</Button>
            </div>
        ))}
        <h2>Total: ${}</h2>
        <Button>Pagar</Button>
    </div>
  )
}

export default Cart