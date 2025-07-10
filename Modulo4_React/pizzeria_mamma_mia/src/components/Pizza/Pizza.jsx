import { useEffect, useState } from "react";
import axios from 'axios'
import Button from "react-bootstrap/esm/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Pizza.css'

const Pizza = () => {

    const [pizza, setPizza] = useState({})

    const capitalizeFirstLetter = (word) => {
        const firstLetterCapt = word.charAt(0).toUpperCase()
        const otherLetters = word.slice(1)
        return firstLetterCapt + otherLetters
    }

    async function getPizza() {
        try {
            const { data } = await axios.get('http://localhost:5000/api/pizzas/p001');
            setPizza(data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPizza()
    }, [])

    return (
        <div className="d-flex justify-content-center w-100">
            <div className="pizza-card d-flex flex-column align-items-center bg-success-subtle w-75 m-3 p-2 border">
                <h2 className="my-2">{pizza.name && capitalizeFirstLetter(pizza.name)}</h2>
                <div className="d-flex align-items-center justify-content-center m-2">
                    <img className="pizza-img w-50" src={pizza.img} />
                    <div className="mx-5">
                        <h5>Ingredientes</h5>
                        <ul className="list-group list-group-flush">
                            {
                                pizza.ingredients && pizza.ingredients.map((ingr, index) => (
                                    <li key={index} className="list-group-item list-group-item-success">{ingr}</li>
                                ))
                            }
                        </ul>
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