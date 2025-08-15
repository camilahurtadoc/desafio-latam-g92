import { useContext } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { UserContext } from '../../context/UserContext';
import { NavLink } from 'react-router-dom';

const Logout = () => {
    const { logout } = useContext(UserContext)

    return (
        <div className='mx-auto p-2' style={{ width: "450px" }}>
            <h2 className='text-center'>Cerrar Sesión</h2>
            <div className='p-4'>
                <Alert variant='warning'>¿Estás seguro que quieres cerrar tu sesión?</Alert>
            </div>
            <div className='d-flex flex-column mb-3 align-items-center'>
                <NavLink to="/">
                    <Button variant="danger" onClick={logout}>
                        Cerrar Sesión
                    </Button>
                </NavLink>
            </div>

        </div>
    )
}

export default Logout