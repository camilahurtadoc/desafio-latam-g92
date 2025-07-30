import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'


function NavbarTop() {
    const total = 25000;
    const token = false;

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Pizzería Mamma Mia </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="d-flex align-items-center gap-1 ms-3 text-body text-decoration-none"><FontAwesomeIcon icon={faPizzaSlice}/> Home</Link>
                        { token ? (
                            <>
                            <Link to="/profile" className="d-flex align-items-center gap-1 ms-3 text-body text-decoration-none"><FontAwesomeIcon icon={faUser}/> Profile</Link>
                            <Link to="/" className="d-flex align-items-center gap-1 ms-3 text-body text-decoration-none"><FontAwesomeIcon icon={faDoorOpen}/> Logout</Link>
                            </>
                        ) : (
                            <>
                            <Link to="/login" className="d-flex align-items-center gap-1 ms-3 text-body text-decoration-none"><FontAwesomeIcon icon={faUser}/> Login</Link>
                            <Link to="/register" className="d-flex align-items-center gap-1 ms-3 text-body text-decoration-none"><FontAwesomeIcon icon={faUserPlus}/> Register</Link>
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
                        <Link to="/cart" className="d-flex align-items-center gap-1 me-3 text-body text-decoration-none"><FontAwesomeIcon icon={faCartShopping}/> Total: $ {total.toLocaleString('es-ES')}</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarTop;