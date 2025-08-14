import axios from "axios";
import { createContext, useState } from "react";

export const AxiosPizzaIdContext = createContext();

const AxiosPizzaIdProvider = ({ children }) => {
    const [pizza, setPizza] = useState({})

    async function getPizza(pizzaId) {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/pizzas/${pizzaId}`);
            setPizza(data)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <AxiosPizzaIdContext.Provider value={{ pizza, getPizza }}>
            { children }
        </AxiosPizzaIdContext.Provider>
    )
}

export default AxiosPizzaIdProvider;