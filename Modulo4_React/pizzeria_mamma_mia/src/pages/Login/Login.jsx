import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Login.css'
import { UserContext } from '../../context/UserContext';

const Login = () => {

    const { email, setEmail,
        password, setPassword,
        eye, 
        type, 
        seePassword,
        handleSubmit } = useContext(UserContext);

    return (
        <div className='mx-auto p-2' style={{ width: "450px" }}>
            <h2 className='text-center'>Ingresa a tu cuenta</h2>
            <Form className='p-3' onSubmit={handleSubmit}>
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
                        <FontAwesomeIcon icon={eye} />
                    </span>
                </Form.Group>

                <div className='d-flex flex-column mb-3 align-items-center'>
                    <Button variant="primary" type="submit">
                        Ingresar
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default Login