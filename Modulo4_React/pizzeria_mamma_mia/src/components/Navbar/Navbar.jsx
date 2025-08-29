import { useContext, useEffect, useRef } from 'react';
import { CartContext } from '../../context/CartContext';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faPizzaSlice, faUser, faUserPlus, faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../context/UserContext';
import './Navbar.css';


function NavbarTop() {
    const { total, cartCount, cartCounter } = useContext(CartContext);
    const { tokenJwt } = useContext(UserContext);

    const setActiveClass = ({ isActive, isPending }) => (isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link");

    useEffect(() => {
        cartCounter();
    })

    return (
        <Navbar expand="lg" className="bg-body-tertiary" fixed="top" >
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
                        <NavLink to="/cart" className={setActiveClass}>
                            <span className='cart-icon-container'>
                                {
                                    cartCount > 0 ? <span className='cart-count'>{cartCount}</span> : null
                                }
                                <FontAwesomeIcon icon={faCartShopping} size="2xl" />
                            </span>
                            Total: $ {total.toLocaleString("es-ES", { useGrouping: true })}
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarTop;