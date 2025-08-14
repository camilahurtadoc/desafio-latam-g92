import { useParams } from "react-router-dom"
import { useContext, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import ListGroup from 'react-bootstrap/ListGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Pizza.css'
import { AxiosPizzaP001Context } from "../../context/AxiosPizzaP001Context";
import CapitalizeFirstLetter from "../../components/CapitalizeFirstLetter/CapitalizeFirstLetter";

const Pizza = () => {

    const { pizzaId } = useParams()

    const { pizza, getPizza } = useContext(AxiosPizzaP001Context)

    useEffect(() => {
        getPizza(pizzaId)
    }, [])

    return (
        <div className="d-flex justify-content-center w-100">
            <div className="pizza-card d-flex flex-column align-items-center bg-success-subtle w-75 m-3 p-2 border">
                <h2 className="my-2">{pizza.name && <CapitalizeFirstLetter word={pizza.name} />}</h2>
                <div className="d-flex align-items-center justify-content-center m-2">
                    <img className="pizza-img w-50" src={pizza.img} />
                    <div className="mx-5">
                        <h5>Ingredientes</h5>
                        <ListGroup className="list-group list-group-flush">
                            {
                                pizza.ingredients && pizza.ingredients.map((ingr, index) => (
                                    <ListGroup.Item key={index} variant="success">{ingr}</ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                    </div>
                </div>
                <p className="my-5 w-75">{pizza.desc}</p>
                <div >

                    <Button variant="dark" className="d-flex align-items-center gap-2 fs-5">
                        <p className="fs-4 text-success my-auto me-3 fw-bold text-center align-middle">${pizza.price && pizza.price.toLocaleString("es-ES", { useGrouping: true })}</p>Añadir
                        <FontAwesomeIcon icon={faCartPlus} />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Pizza