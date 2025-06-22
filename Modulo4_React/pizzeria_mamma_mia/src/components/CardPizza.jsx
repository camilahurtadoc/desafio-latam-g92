import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


function CardPizza({ name, price, ingredients, img }) {
    let items = "";
    function displayIngredients(ingredients) {
        for (let item of ingredients) {
            items += item + ", "
        }
        return items.slice(0, -2);
    }

  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{fontSize: '0.8em'}}>
            <h6>Ingredientes</h6>
            {displayIngredients(ingredients)}
        </ListGroup.Item>
        <ListGroup.Item style={{textAlign: 'center'}}><h5>Precio: ${price}</h5></ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex justify-content-around" >
        <Button variant="light">Ver más</Button>
        <Button variant="dark" >Añadir</Button>

      </Card.Body>
    </Card>
  )
}

export default CardPizza