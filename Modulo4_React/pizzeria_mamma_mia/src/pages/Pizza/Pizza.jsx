import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import ListGroup from 'react-bootstrap/ListGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import './Pizza.css'
import { AxiosPizzaIdContext } from "../../context/AxiosPizzasIdContext";
import CapitalizeFirstLetter from "../../components/CapitalizeFirstLetter/CapitalizeFirstLetter";
import { CartContext } from "../../context/CartContext";

const Pizza = () => {

    const { pizzaId } = useParams()

    const { pizza, getPizza } = useContext(AxiosPizzaIdContext)

    const { cart, handleclick2,
        minusPizza2, plusPizza2 } = useContext(CartContext)

    const [pizzaInCart, setPizzaInCart] = useState(null)


    useEffect(() => {
        getPizza(pizzaId)
    }, [])

    useEffect(() => {
        const index = cart.findIndex(ThisPizza => ThisPizza.id === pizza.id)
        index === -1 ? (setPizzaInCart(0)) : (setPizzaInCart(cart[index].count))
    })

    return (
        <div className="d-flex justify-content-center w-100">
            <div className="pizza-card d-flex flex-column align-items-center bg-secondary-subtle w-75 m-3 p-2 border">
                <h2 className="my-2">{pizza.name && <CapitalizeFirstLetter word={pizza.name} />}</h2>
                <div className="img_container d-flex align-items-center justify-content-center m-2">
                    <img className="pizza-img" src={pizza.img} />
                    <div className="mx-5">
                        <h5>Ingredientes</h5>
                        <ListGroup className="list-group list-group-flush">
                            {
                                pizza.ingredients && pizza.ingredients.map((ingr, index) => (
                                    <ListGroup.Item key={index} variant="secondary">{ingr}</ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                    </div>
                </div>
                <p className="mt-3 mb-5 w-75">{pizza.desc}</p>
                <div>
                    {
                        cart.findIndex(thisPizza => thisPizza.id === pizza.id) === -1 ? (
                            <Button variant="dark" className="d-flex align-items-center gap-2 fs-5 mb-2" onClick={() => handleclick2(pizza.name, pizza.price, pizza.img, pizza.id)}>
                                <p className="fs-4 text-success my-auto me-3 fw-bold text-center align-middle">${pizza.price && pizza.price.toLocaleString("es-ES", { useGrouping: true })}</p>Añadir
                                <FontAwesomeIcon icon={faCartPlus} />
                            </Button>
                        ) : (
                            <div className="button-container d-flex align-items-center gap-3 bg-white" >
                                <Button variant="danger" className="fs-5 m-1" onClick={() => minusPizza2(pizza.price, pizza.id)}><FontAwesomeIcon icon={faMinus} /></Button>
                                <span className="fs-5 mb-2 fw-bold">{pizzaInCart}</span>
                                <Button variant="success" className="fs-5 m-1" onClick={() => plusPizza2(pizza.price, pizza.id)}><FontAwesomeIcon icon={faPlus} /></Button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Pizza