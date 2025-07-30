import CardPizza from '../Cardpizza/CardPizza'
import Header from '../Header/Header'
// import { pizzas } from '../../assets/js/pizzas'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import { useEffect } from 'react';


function Home() {

    const [listaPizzas, setListaPizzas] = useState([])

    async function getPizzaList() {
  try {
    const data = (await axios.get('http://localhost:5000/api/pizzas')).data;
    setListaPizzas(data)
  } catch (error) {
    console.error(error);
  }
}

    useEffect(() => {
        getPizzaList()
    }, [])

    return (
        <>
            <Header
                title="¡Pizzería Mamma Mia!"
                description="¡Tenemos las mejores pizzas que podrás encontrar!" />

            <Container fluid className='mt-5'>
                <Row md={3}>
                {
                    listaPizzas.map(item => (
                            <Col className='d-flex justify-content-center' key={item.id}>
                                <CardPizza
                                    key={item.id}
                                    name={item.name}
                                    price={item.price}
                                    ingredients={item.ingredients}
                                    img={item.img}
                                />
                            </Col>
                    ))
                }
                </Row>
            </Container>

        </>
    )
}

export default Home