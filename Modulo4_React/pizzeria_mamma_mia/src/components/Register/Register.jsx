import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMandatory, setErrorMandatory] = useState(false);

    const validate = (event) => {
        event.preventDefault();

        if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
            setErrorMandatory(true)
            return
        }
        setErrorMandatory(false)
    }




    return (
        <div className='mx-auto p-2' style={{ width: "450px" }}>
            <h2>Regístrate</h2>
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

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Contraseña"
                        onChange={event => setPassword(event.target.value)}
                        value={password} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirmar contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirmar contraseña"
                        onChange={event => setConfirmPassword(event.target.value)}
                        value={confirmPassword} />
                </Form.Group>

                <div className='d-flex justify-content-center'>
                    {
                        errorMandatory ? <p className='error-mandatory'>Todos los campos son obligatorios.</p> : null
                    }
                    <Button variant="primary" type="submit">
                        Crear cuenta
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default Register