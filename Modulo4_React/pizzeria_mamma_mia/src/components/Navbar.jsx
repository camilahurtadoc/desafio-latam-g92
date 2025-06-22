import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
                        <Nav.Link href="#features">Home</Nav.Link>
                        { token ? (
                            <>
                            <Nav.Link href="#pricing">Profile</Nav.Link>
                            <Nav.Link href="#pricing">Logout</Nav.Link>
                            </>
                        ) : (
                            <>
                            <Nav.Link href="#pricing">Login</Nav.Link>
                            <Nav.Link href="#pricing">Register</Nav.Link>
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
                        <Nav.Link href="#">Total: $</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarTop;