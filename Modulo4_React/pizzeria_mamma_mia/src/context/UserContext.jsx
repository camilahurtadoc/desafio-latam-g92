import { createContext, useState } from "react";
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    // token asociado a usuario
    const [tokenJwt, setTokenJwt] = useState("")

    const logout = () => {
        localStorage.clear()
        setTokenJwt("")
        setUserEmail(null)
    }

    // hook para redirigir usuario cuando haga login o register
    const navigate = useNavigate()

    // estado para contraseña escondida o visible
    const [eye, setEye] = useState(faEyeSlash)
    const [type, setType] = useState("password")

    const seePassword = () => {
        if (type === "password") {
            setEye(faEye)
            setType("text")
        } else {
            setEye(faEyeSlash)
            setType("password")
        }
    }

    // State para email y password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Login
    // consumo de ruta para hacer login y entrega de token_jwt
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
                Swal.fire({
                    title: "Error en Log In",
                    text: "Datos de usuario y/o contraseña incorrectos.",
                    icon: "error"
                })
            }

            const data = await response.json()

            localStorage.setItem("token_jwt", data.token)
            setTokenJwt(localStorage.getItem("token_jwt"))

            if (response.ok) {
                Swal.fire({
                    title: "Log In",
                    text: "Datos ingresados correctamente.",
                    icon: "success"
                })

                navigate("/")
            }

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
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmitRegister = async (event) => {
        event.preventDefault();

        if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
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

        if (password != confirmPassword) {
            Swal.fire({
                title: "Contraseña",
                text: "La contraseña y confirmación de contraseña deben ser iguales.",
                icon: "error"
            })
            return
        }

        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            })

            if (!response.ok) {
                console.log("error en el registro")
            }

            const data = await response.json()

            localStorage.setItem("token_jwt", data.token)
            setTokenJwt(localStorage.getItem("token_jwt"))

            if (response.ok) {
                Swal.fire({
                    title: "Registro Exitoso",
                    text: "Datos ingresados correctamente.",
                    icon: "success"
                })

                navigate("/")
            }

        } catch (error) {
            console.log("error: ", error)
        }

        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setEye(faEyeSlash)
        setType("password")
    }

    // Profile
    // consumo de ruta para datos de usuario en el perfil desde backend

    const [userEmail, setUserEmail] = useState(null)

    const getUserInfo = async () => {
        setTokenJwt(localStorage.getItem("token_jwt"))

        if (!tokenJwt) {
            console.log("El usuario no posee token")
            return
        }

        try {
            const response = await fetch("http://localhost:5000/api/auth/me", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${tokenJwt}`
                },
            })

            if (!response.ok) {
                console.log("error en perfil usuario")
            }

            const data = await response.json()

            setUserEmail(data.email)      

        } catch (error) {
            console.log("error: ", error)
        }
    }

    return (
        <UserContext.Provider value={{
            tokenJwt, setTokenJwt, 
            logout,
            email, setEmail,
            password, setPassword,
            eye, setEye,
            type, setType,
            seePassword, handleSubmit,
            confirmPassword, setConfirmPassword,
            handleSubmitRegister,
            getUserInfo, userEmail
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;