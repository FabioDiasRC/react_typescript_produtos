import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/stylesheet.scss'
import Header from "./componentes/Header";
import Carousel from "./componentes/Carousel";
import Cards from "./componentes/Cards"
import GetData from './componentes/GetData';
import Photos from './componentes/Photos';
import Footer from './componentes/Footer';

function App() {
  return (
    <>
    
      <Header/>
      <Carousel/>
      <Cards/>
      <GetData/>
      <Photos/>
      <Footer/>
    
    </>  
  )
}

export default App;