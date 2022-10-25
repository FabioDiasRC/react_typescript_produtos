import '../scss/stylesheet.scss';
import Product from '../img/product.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar className='navbar' variant="dark" expand="lg" fixed='top'>
      <Container>
          <img className='navbar__logo' src={Product} alt="" />
          <Navbar.Brand  className='navbar__text' href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />        
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbar__secondpart">
              <Nav.Link className='navbar__text' href="#home">Empresa</Nav.Link>
              <Nav.Link className='navbar__text' href="#link">Carrinho</Nav.Link>
              <NavDropdown className='navbar__text' title="Contatos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Git Hub</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Instagram</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">E-mail</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;