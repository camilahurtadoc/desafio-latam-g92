import axios from "axios";
import { createContext, useState } from "react";

export const AxiosPizzaP001Context = createContext();

const AxiosPizzaP001Provider = ({ children }) => {
    const [pizza, setPizza] = useState({})

    async function getPizza(pizzaid) {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/pizzas/${pizzaid}`);
            setPizza(data)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <AxiosPizzaP001Context.Provider value={{ pizza, getPizza }}>
            { children }
        </AxiosPizzaP001Context.Provider>
    )
}

export default AxiosPizzaP001Provider;