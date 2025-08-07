import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useEffect } from 'react';

function CardPizza({ name, price, ingredients, img, id }) {

  const capitalizeFirstLetter = (word) => {
    const firstLetterCapt = word.charAt(0).toUpperCase()
    const otherLetters = word.slice(1)
    return firstLetterCapt + otherLetters
  }

  const { total, setTotal } = useContext(CartContext)
  const { cart, setCart } = useContext(CartContext)

  const handleClick = () => {
    
    let newCart = cart
    newCart.map(cartItem => {(cartItem.id === cart.id ? (cartItem.count += 1) : null)})

    // falta agregar condicion sobre q escoger, newCart o el pizzatoAdd

    const pizzaToAdd = {
      id: id,
      name: name,
      price: price,
      count: 1,
      img: img,
    }

    setTotal(total + price)
    setCart([...cart, pizzaToAdd])
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
        <Button variant="dark" onClick={handleClick}>Añadir <FontAwesomeIcon icon={faCartPlus} /></Button>
      </Card.Body>
    </Card>
  )
}

export default CardPizza