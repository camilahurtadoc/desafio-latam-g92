import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import './Register.css'
import Swal from 'sweetalert2'

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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

    const validate = (event) => {
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


        Swal.fire({
            title: "Registro Exitoso",
            text: "Datos ingresados correctamente.",
            icon: "success"
        })
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setEye(faEyeSlash)
        setType("password")
    }

    return (
        <div className='mx-auto p-2' style={{ width: "450px" }}>
            <h2 className='text-center'>Regístrate</h2>
            <Form className='p-3' onSubmit={validate}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingresa tu email"
                        onChange={event => setEmail(event.target.value)}
                        value={email} />
                    <Form.Text className="text-muted">
                        No te preocupes. No compartiremos tu email con nadie.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type={type}
                        placeholder="Contraseña"
                        onChange={event => setPassword(event.target.value)}
                        value={password} />
                    <span className='span-icon position-absolute end-0 translate-middle-x'
                        onClick={seePassword}>
                        <FontAwesomeIcon icon={eye} />
                    </span>
                </Form.Group>

                <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
                    <Form.Label>Confirmar contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirmar contraseña"
                        onChange={event => setConfirmPassword(event.target.value)}
                        value={confirmPassword} />
                </Form.Group>

                <div className='d-flex flex-column mb-3 align-items-center'>
                    <Button variant="primary" type="submit">
                        Crear cuenta
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default Register