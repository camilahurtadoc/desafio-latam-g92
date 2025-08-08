import CardPizza from '../../components/CardPizza/CardPizza'
import Header from '../../components/Header/Header'
// import { pizzas } from '../../assets/js/pizzas'
import { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import { useEffect } from 'react';
import { AxiosPizzasContext } from '../../context/AxiosPizzasContext';


function Home() {

    const { listaPizzas, getPizzaList } = useContext(AxiosPizzasContext)

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
                                    id={item.id}
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