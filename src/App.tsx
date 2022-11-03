import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/stylesheet.scss'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './componentes/rotas/Home'
import Empresa from './componentes/rotas/Empresa'
import Carrinho from './componentes/rotas/Carrinho'
import Favoritos from './componentes/rotas/Favoritos'
import Produtos from './componentes/rotas/Produtos'
import Product from './img/product.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './componentes/Footer';

function App() {
  return (
    <Router>
      <Navbar className='navbar' variant="dark" expand="lg" fixed='top'>
        <Container>
          <Link to="/" className='navbar__text'><img className='navbar__logo' src={Product} alt="" /></Link>
          <Navbar.Brand className='navbar__text' href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navbar__secondpart">
            <Nav className="">
              <Link to="/" className='navbar__text'>Pagina Inicial</Link>
              <Link to="/empresa" className='navbar__text'>Empresa</Link>
              <Link to="/produtos" className='navbar__text'>Produtos</Link>
              <Link to="/favoritos" className='navbar__text'>Favoritos</Link>
              <Link to="/carrinho" className='navbar__text'>Carrinho</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;