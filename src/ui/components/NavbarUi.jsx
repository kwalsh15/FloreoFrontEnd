import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ShoppingCart } from './ShoppingCart';



export const NavbarUi = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Floreo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="navbar-collapse justify-content-center">
            <Nav.Link as={NavLink}
                      to="/home"
                      className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active': ''}` } 
            >
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} 
                      to="/gallery"
                      className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active': ''}` } 
            >
              Gallery
            </Nav.Link>

            <Nav.Link as={NavLink} 
                      to="about"
                      className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active': ''}` }
            >
              About
            </Nav.Link>


      
          </Nav>
          
          <Nav>
            <Nav.Link className=''> 
              <ShoppingCart />
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
