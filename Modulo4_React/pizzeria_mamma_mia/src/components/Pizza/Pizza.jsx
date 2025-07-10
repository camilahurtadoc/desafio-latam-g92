import { useEffect, useState } from "react";
import axios from 'axios'

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
        <div>
            <h2>{pizza.name && capitalizeFirstLetter(pizza.name)}</h2>
            <p>${pizza.price && pizza.price.toLocaleString("es-ES", { useGrouping: true })}</p>
            <ul>
                {
                    pizza.ingredients && pizza.ingredients.map((ingr, index) => (
                        <li key={index}>{ingr}</li>
                    ))
                }
            </ul>
            <img src={pizza.img} />
            <p>{pizza.desc}</p>
        </div>
    )
}

export default Pizza