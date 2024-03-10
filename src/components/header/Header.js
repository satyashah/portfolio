import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "./s_logo.png";
import "./Header.css";
import { HashLink as Link } from "react-router-hash-link";

function scrollTo(id) {
    return function(event) {
        event.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
}

const Header = () => {
    return (
        <Navbar bg="black" variant="dark" expand="md" className="sticky-top">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top logo"
                        onClick={scrollTo('hero')}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto nav-fill w-100"
                        style={{ maxHeight: '200px' }}
                        navbarScroll
                    >
                        <NavLink className="nav-link link-format" onClick={scrollTo('education')}>Education</NavLink>
                        <NavLink className="nav-link link-format" onClick={scrollTo('experience')}>Experience</NavLink>
                        <NavLink className="nav-link link-format" onClick={scrollTo('research')}>Research</NavLink>
                        <NavLink className="nav-link link-format" onClick={scrollTo('projects')}>Projects</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
