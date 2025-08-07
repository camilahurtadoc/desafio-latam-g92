import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMagnifyingGlass, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function CardPizza({ name, price, ingredients, img, id }) {

  const capitalizeFirstLetter = (word) => {
    const firstLetterCapt = word.charAt(0).toUpperCase()
    const otherLetters = word.slice(1)
    return firstLetterCapt + otherLetters
  }

  const { total, setTotal } = useContext(CartContext)
  const { cart, setCart } = useContext(CartContext)

  const handleClick = () => {
    if (cart.length === 0) {
      const pizzaToAdd = {
        id: id,
        name: name,
        price: price,
        count: 1,
        img: img,
      }
      setCart([pizzaToAdd])
    } else if (cart.some(pizza => pizza.id === id)) {

      let newCart = cart
      const index = cart.findIndex(pizza => pizza.id === id)

      newCart[index].count += 1
      setCart(newCart)
    } else {
      const pizzaToAdd = {
        id: id,
        name: name,
        price: price,
        count: 1,
        img: img,
      }
      setCart([...cart, pizzaToAdd])
    }

    setTotal(total + price)
  }

  const pizzaCount = () => {
    const index = cart.findIndex(pizza => pizza.id === id)
    return cart[index].count
  }

  const minusPizza = () => {

    const index = cart.findIndex(pizza => pizza.id === id)

    if (cart[index].count - 1 < 0) {
      return
    }

    let newCart = cart
    newCart.map(cartItem => (cartItem.id === cart[index].id ? (cartItem.count -= 1) : null))

    setCart(newCart)
    setTotal(total - price)
  }

  const plusPizza = (pizza) => {

    const index = cart.findIndex(pizza => pizza.id === id)

    let newCart = cart
    newCart.map(cartItem => (cartItem.id === cart[index].id ? (cartItem.count += 1) : null))

    setCart(newCart)
    setTotal(total + price)
  }


  return (
    <Card style={{ width: '20rem' }} className='mb-5'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{capitalizeFirstLetter(name)}</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{ fontSize: '0.8em' }}>
          <h6>Ingredientes</h6>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </ListGroup.Item>
        <ListGroup.Item className='text-center'><h5>Precio: ${price.toLocaleString("es-ES", { useGrouping: true })}</h5></ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex justify-content-around">
        <Button variant="light">Ver más <FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
        {
          cart.findIndex(pizza => pizza.id === id) === -1 ? (
            <Button variant="dark" onClick={handleClick}>
              Añadir <FontAwesomeIcon icon={faCartPlus} />
            </Button>
          ) : (
            <div className="d-flex align-items-center gap-3" >
              <Button variant="danger" onClick={minusPizza}><FontAwesomeIcon icon={faMinus} /></Button>
              <span>{pizzaCount()}</span>
              <Button variant="success" onClick={plusPizza}><FontAwesomeIcon icon={faPlus} /></Button>
            </div>
          )
        }



      </Card.Body>
    </Card>
  )
}

export default CardPizza