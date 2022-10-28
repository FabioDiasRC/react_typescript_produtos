import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/stylesheet.scss'
import Header from "./componentes/Header";
import Carousel from "./componentes/Carousel";
import Cards from "./componentes/Cards"
import GetData from './componentes/data_from_api/GetData';
import Photos from './componentes/Photos';
import Footer from './componentes/Footer';
import Banner from './componentes/Banner';
import Location from './componentes/Location';
import FormProduct from './componentes/Form';

function App() {
  return (
    <>
    
      <Header/>
      <Carousel/>
      <Cards/>
      <GetData/>
      <Photos/>
      <Banner/>
      <Location/>
      <FormProduct/>
      <Footer/>
    </>    
  )
}

export default App;