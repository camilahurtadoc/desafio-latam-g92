import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faPizzaSlice, faUser, faUserPlus, faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../context/UserContext';


function NavbarTop() {
    const {total} = useContext(CartContext);
    const {token, setToken, logout } = useContext(UserContext)

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Pizzería Mamma Mia </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link mx-1"><FontAwesomeIcon icon={faPizzaSlice} /> Home</Link>
                        {token ? (
                            <>
                                <Link to="/profile" className="nav-link mx-1"><FontAwesomeIcon icon={faUser} /> Profile</Link>
                                <Link to="/" className="nav-link mx-1"><FontAwesomeIcon icon={faDoorOpen} /> Logout</Link>
                            </>

                        ) : (
                            <>
                                <Link to="/login" className="nav-link mx-1"><FontAwesomeIcon icon={faUser} /> Login</Link>
                                <Link to="/register" className="nav-link mx-1"><FontAwesomeIcon icon={faUserPlus} /> Register</Link>
                                
                                {/* Versión opcional para Link, manteniendo el NavLink de bootstrap*/}
                                {/* <Link to="/ruta-deseada" className="text-decoration-none">
                                    <Nav.Link as="span">Texto del enlace</Nav.Link>
                                */}
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
                        <Link to="/cart" className="nav-link mx-1"><FontAwesomeIcon icon={faCartShopping} /> Total: $ {total.toLocaleString("es-ES", { useGrouping: true })}</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarTop;