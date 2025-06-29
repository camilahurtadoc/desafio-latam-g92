import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMandatory, setErrorMandatory] = useState(false);
    const [errorPasswordLength, setErrorPasswordLength] = useState(false)
    const [success, setSuccess] = useState(false)

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

        if (!email.trim() || !password.trim()) {
            setErrorMandatory(true)
            return
        }
        setErrorMandatory(false)

        if (password.length < 6) {
            setErrorPasswordLength(true)
            return
        }
        setErrorPasswordLength(false)


        setSuccess(true)
        setEmail("")
        setPassword("")
        setEye(faEyeSlash)
        setType("password")
    }

    return (
        <div className='mx-auto p-2' style={{ width: "450px" }}>
            <h2 className='text-center'>Ingresa a tu cuenta</h2>
            <Form className='p-3' onSubmit={validate}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingresa tu email"
                        onChange={event => setEmail(event.target.value)}
                        value={email} />
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
                        <FontAwesomeIcon icon={eye}/>
                    </span>
                </Form.Group>

                <div className='d-flex flex-column mb-3 align-items-center'>
                    {
                        errorMandatory ? <p className='error text-light bg-danger'>Todos los campos son obligatorios.</p> : null
                    }
                    {
                        errorPasswordLength ? <p className='error text-light bg-danger'>La contraseña debe tener al menos 6 caracteres.</p> : null
                    }
   
                    <Button variant="primary" type="submit">
                        Ingresar
                    </Button>
                    {
                        success ? <p className='error text-light bg-success mt-3'>Datos ingresados correctamente</p> : null
                    }
                </div>
            </Form>
        </div>
    )
}

export default Login