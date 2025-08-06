import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function CardPizza({  name, price, ingredients, img }) {

  const capitalizeFirstLetter = (word) => {
    const firstLetterCapt = word.charAt(0).toUpperCase()
    const otherLetters = word.slice(1)
    return firstLetterCapt + otherLetters
  }

  const { total, setTotal } = useContext(CartContext)

  return (
    <Card style={{ width: '20rem' }} className='mb-5'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{capitalizeFirstLetter(name)}</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{fontSize: '0.8em'}}>
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
        <Button variant="light">Ver más <FontAwesomeIcon icon={faMagnifyingGlass}/></Button>
        <Button variant="dark" onClick={() => setTotal(total + price)}>Añadir <FontAwesomeIcon icon={faCartPlus}/></Button>
      </Card.Body>
    </Card>
  )
}

export default CardPizza