import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Register.css'
import { UserContext } from '../../context/UserContext';

const Register = () => {

    const { email, setEmail,
        password, setPassword,
        eye, 
        type, 
        seePassword,
        confirmPassword, setConfirmPassword,
        handleSubmitRegister } = useContext(UserContext)

    return (
        <div className='mx-auto p-2' style={{ width: "450px" }}>
            <h2 className='text-center'>Regístrate</h2>
            <Form className='p-3' onSubmit={handleSubmitRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmailRegister">
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

                <Form.Group className="mb-3 position-relative" controlId="formBasicPasswordRegister">
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

                <Form.Group className="mb-3 position-relative" controlId="formBasicPasswordConfirmationRegister">
                    <Form.Label>Confirmar contraseña</Form.Label>
                    <Form.Control
                        type={type}
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