import { createContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    // token para login y logout
    const [token, setToken] = useState(true)

    const logout = () => {
        setToken(!token)
    }

    // Login
    // consumo de ruta para hacer login y entrega de token_jwt
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [eye, setEye] = useState(faEyeSlash)
    const [type, setType] = useState("password")

    const navigate = useNavigate()

    const seePassword = () => {
        if (type === "password") {
            setEye(faEye)
            setType("text")
        } else {
            setEye(faEyeSlash)
            setType("password")
        }
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email.trim() || !password.trim()) {
            Swal.fire({
                title: "Campos Vacíos",
                text: "Todos los campos son obligatorios.",
                icon: "error"
            })
            return
        }

        if (password.length < 6) {
            Swal.fire({
                title: "Contraseña",
                text: "La contraseña debe tener al menos 6 caracteres.",
                icon: "error"
            })
            return
        }

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            })

            if (!response.ok) {
                console.log("error en el login")
                //agregar swal fire aquí mejor
            }

            const data = await response.json()

            localStorage.setItem("token_jwt", data.token)

            Swal.fire({
                title: "Log In",
                text: "Datos ingresados correctamente.",
                icon: "success"
            })

            setToken(true)
            // const navigate = useNavigate()
            navigate("/")

        } catch (error) {
            console.log("error: ", error)
        }

        setEmail("")
        setPassword("")
        setEye(faEyeSlash)
        setType("password")
    }

    // Register
    // consumo de ruta para registrar nuevo usuario y entrega de token_jwt

    return (
        <UserContext.Provider value={{
            token, setToken, logout,
            email, setEmail,
            password, setPassword,
            eye, setEye,
            type, setType,
            seePassword, handleSubmit
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;