import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
                <Navbar.Brand href="#home">Pizzería Mamma Mia </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features"><FontAwesomeIcon icon={faPizzaSlice}/> Home</Nav.Link>
                        { token ? (
                            <>
                            {/* <><FontAwesomeIcon icon={faUser}/> Profile</> */}
                            <Nav.Link href="#pricing"><FontAwesomeIcon icon={faUser}/> Profile</Nav.Link>
                            <Nav.Link href="#pricing"><FontAwesomeIcon icon={faDoorOpen}/> Logout</Nav.Link>
                            </>
                        ) : (
                            <>
                            <Nav.Link href="#pricing"><FontAwesomeIcon icon={faUser}/> Login</Nav.Link>
                            <Nav.Link href="#pricing"><FontAwesomeIcon icon={faUserPlus}/> Register</Nav.Link>
                            </>
                        )}
                        <NavDropdown title="Productos" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Pizzas Tradicionales</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Pizzas Vegetarianas
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Promociones</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Postres
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#"><FontAwesomeIcon icon={faCartShopping}/> Total: $ {total.toLocaleString('es-ES')}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarTop;