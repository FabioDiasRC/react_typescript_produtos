import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/stylesheet.scss'
import Carousel from "../Carousel";
import Cards from "../Cards"
import GetData from '../data_from_api/GetData';
import Photos from '../Photos';
import Banner from '../Banner';
import Location from '../Location';
import FormProduct from '../Form';

function App() {
  return (
    <>
      <Carousel/>
      <Cards/>
      <GetData/>
      <Photos/>
      <Banner/>
      <Location/>
      <FormProduct/>
    </>    
  )
}

export default App;