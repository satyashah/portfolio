import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import logo from "./s_logo.png";
import "./Header.css";

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
                        className="d-inline-block align-top"
                        style={{ marginLeft: '30px' }} // Add margin to the left of the image
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto nav-fill w-100"
                        style={{maxHeight: '200px'}}
                        navbarScroll
                    >
                        <NavLink className ="nav-link link-format" to="/edu">Education</NavLink>
                        <NavLink className ="nav-link link-format" to="/exp">Experience</NavLink>  
                        <NavLink className ="nav-link link-format" to="/rea">Research</NavLink>
                        <NavLink className ="nav-link link-format" to="/pro">Projects</NavLink>     
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
