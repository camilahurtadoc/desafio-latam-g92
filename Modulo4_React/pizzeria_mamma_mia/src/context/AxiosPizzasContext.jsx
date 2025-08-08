import axios from "axios";
import { createContext, useState } from "react";

export const AxiosPizzasContext = createContext();

const AxiosPizzasProvider = ({ children }) => {
    const [listaPizzas, setListaPizzas] = useState([])

    async function getPizzaList() {
        try {
            const data = (await axios.get('http://localhost:5000/api/pizzas')).data;
            setListaPizzas(data)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <AxiosPizzasContext.Provider value={{ listaPizzas, getPizzaList }}>
            { children }
        </AxiosPizzasContext.Provider>
    )
}

export default AxiosPizzasProvider;