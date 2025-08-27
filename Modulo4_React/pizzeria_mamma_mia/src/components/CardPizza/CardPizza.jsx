import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMagnifyingGlass, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import CapitalizeFirstLetter from '../CapitalizeFirstLetter/CapitalizeFirstLetter';

import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

function CardPizza({ name, price, ingredients, img, id }) {

  const { cart, handleclick2,
    minusPizza2, plusPizza2 } = useContext(CartContext)

  const [pizzaInCart, setPizzaInCart] = useState(null)

  const navigate = useNavigate()
  const goToPizza = () => {
    navigate(`/pizzas/${id}`)
  }

  useEffect(() => {
    const index = cart.findIndex(pizza => pizza.id === id)
    index === -1 ? (setPizzaInCart(0)) : (setPizzaInCart(cart[index].count))

  })

  return (
    <Card style={{ width: '20rem' }} className='mb-5'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{<CapitalizeFirstLetter word={name} />}</Card.Title>
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
        <Button variant="light" onClick={goToPizza}>Ver más <FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
        {
          cart.findIndex(pizza => pizza.id === id) === -1 ? (
            <Button variant="dark" onClick={() => handleclick2(name, price, img, id)}>
              Añadir <FontAwesomeIcon icon={faCartPlus} />
            </Button>
          ) : (
            <div className="d-flex align-items-center gap-3" >
              <Button variant="danger" onClick={() => minusPizza2(price, id)}><FontAwesomeIcon icon={faMinus} /></Button>
              <span>{pizzaInCart}</span>
              <Button variant="success" onClick={() => plusPizza2(price, id)}><FontAwesomeIcon icon={faPlus} /></Button>
            </div>
          )
        }

      </Card.Body>
    </Card>
  )
}

export default CardPizza