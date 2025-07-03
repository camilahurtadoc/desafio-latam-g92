import { pizzaCart } from "../../assets/js/pizzas"

const Cart = () => {

    const capitalizeFirstLetter = (word) => {
    const firstLetterCapt = word.charAt(0).toUpperCase()
    const otherLetters = word.slice(1)
    return firstLetterCapt + otherLetters
  }

  return (
    <div>
        <h3>Detalles del pedido:</h3>
        {pizzaCart.map(item => (
            <div>
                <img src={item.img} />
                <h4>{capitalizeFirstLetter(item.name)}</h4>
                <span>${item.price}</span>
                <button>-</button>
                <p></p>
                <button>+</button>
            </div>
        ))}
        <h2>Total: ${}</h2>
        <button>Pagar</button>
    </div>
  )
}

export default Cart