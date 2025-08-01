import Button from 'react-bootstrap/Button';

const Profile = () => {
    return (
        <div className='mx-auto my-5' style={{ width: "450px" }}>
            <h2 className='text-center'>Perfil de Usuario</h2>
            <div className='d-flex align-items-baseline gap-3 mt-2'>
                <h5>Nombre:</h5>
                <p>Usuario y Apellido</p>
            </div>
            <div className='d-flex align-items-baseline gap-3 mt-2'>
                <h5>Mail:</h5>
                <p>hola@mail.com</p>
            </div>
            <div className='d-flex flex-column mb-3 align-items-center'>
                <Button variant="primary" type="submit">
                    Cerrar sesión
                </Button>
            </div>
        </div>
    )
}

export default Profile