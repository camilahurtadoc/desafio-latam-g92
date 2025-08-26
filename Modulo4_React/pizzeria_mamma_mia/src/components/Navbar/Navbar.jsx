import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faPizzaSlice, faUser, faUserPlus, faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../context/UserContext';


function NavbarTop() {
    const { total } = useContext(CartContext);
    const { tokenJwt } = useContext(UserContext)


    const setActiveClass = ({ isActive, isPending }) => (isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link")


    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Pizzería Mamma Mia </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className={setActiveClass}><FontAwesomeIcon icon={faPizzaSlice} /> Home</NavLink>
                        {tokenJwt ? (
                            <>
                                <NavLink to="/profile" className={setActiveClass}><FontAwesomeIcon icon={faUser} /> Profile</NavLink>
                                <NavLink to="/logout" className={setActiveClass}><FontAwesomeIcon icon={faDoorOpen} /> Logout</NavLink>
                            </>

                        ) : (
                            <>
                                <NavLink to="/login" className={setActiveClass}><FontAwesomeIcon icon={faUser} /> Login</NavLink>
                                <NavLink to="/register" className={setActiveClass}><FontAwesomeIcon icon={faUserPlus} /> Register</NavLink>
                            </>
                        )}
                    </Nav>
                    <Nav>
                        <NavLink to="/cart" className={setActiveClass}><FontAwesomeIcon icon={faCartShopping} /> Total: $ {total.toLocaleString("es-ES", { useGrouping: true })}</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarTop;