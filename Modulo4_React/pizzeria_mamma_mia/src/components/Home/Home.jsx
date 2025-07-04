import CardPizza from '../Cardpizza/CardPizza'
import Header from '../Header/Header'
import { pizzas } from '../../assets/js/pizzas'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {

    const [listaPizzas, setListaPizzas] = useState(pizzas)

    return (
        <>
            <Header
                title="¡Pizzería Mamma Mia!"
                description="¡Tenemos las mejores pizzas que podrás encontrar!" />

            <Container className='mt-5'>
                <Row md={3}>
                {
                    listaPizzas.map(item => (
                            <Col >
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