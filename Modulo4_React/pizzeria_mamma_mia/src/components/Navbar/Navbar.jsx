import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {  NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faPizzaSlice, faUser, faUserPlus, faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../context/UserContext';


function NavbarTop() {
    const { total } = useContext(CartContext);
    const { token, setToken, logout } = useContext(UserContext)

    const setActiveClass = ({ isActive, isPending }) => (isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link")


    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Pizzería Mamma Mia </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className={setActiveClass}><FontAwesomeIcon icon={faPizzaSlice} /> Home</NavLink>
                        {token ? (
                            <>
                                <NavLink to="/profile" className={setActiveClass}><FontAwesomeIcon icon={faUser} /> Profile</NavLink>
                                <NavLink to="/" onClick={logout} className={setActiveClass}><FontAwesomeIcon icon={faDoorOpen} /> Logout</NavLink>
                            </>

                        ) : (
                            <>
                                <NavLink to="/login" className={setActiveClass}><FontAwesomeIcon icon={faUser} /> Login</NavLink>
                                <NavLink to="/register" className={setActiveClass}><FontAwesomeIcon icon={faUserPlus} /> Register</NavLink>
                            </>
                        )}
                        {/* <NavDropdown title="Productos" id="collapsible-nav-dropdown" className="ms-2">
                            <NavDropdown.Item href="#action/3.1">Pizzas Tradicionales</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                            Pizzas Vegetarianas
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Promociones</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                            Postres
                            </NavDropdown.Item>
                            </NavDropdown> */}
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