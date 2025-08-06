import { useContext } from "react";

export const CartContext = useContext();

const ContextProvider = ({ children }) => {
    const [total, setTotal] = useState(0)

    return (
        <ContextProvider>
            {children}
        </ContextProvider>
    )
}

export default ContextProvider;