import { useContext } from "react";

export const CartContext = useContext();

const ContextProvider = ({ children }) => {
    const [price, setPrice] = useState(0)

    return (
        <ContextProvider>
            {children}
        </ContextProvider>
    )
}

export default ContextProvider;