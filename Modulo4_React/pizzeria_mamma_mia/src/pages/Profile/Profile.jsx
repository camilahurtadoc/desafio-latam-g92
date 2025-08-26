import { useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { getUserInfo, userEmail } = useContext(UserContext)

    const navigate = useNavigate()
    
    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <div className='mx-auto my-5' style={{ width: "450px" }}>
            <h2 className='text-center'>Perfil de Usuario</h2>
            <div className='d-flex align-items-baseline gap-3 mt-2'>
                <h5>Mail:</h5>
                <p>{userEmail}</p>
            </div>
            <div className='d-flex flex-column mb-3 align-items-center'>
                <Button variant="primary" onClick={() => navigate("/logout")}>
                    Cerrar sesión
                </Button>
            </div>
        </div>
    )
}

export default Profile