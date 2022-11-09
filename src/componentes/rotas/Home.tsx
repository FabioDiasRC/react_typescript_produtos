import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/stylesheet.scss'
import Carousel from "../Carousel";
import Cards from "../Cards"
import GetData from '../data_from_api/productHome/GetDataHome';
import Photos from '../Photos';
import Banner from '../Banner';
import Location from '../Location';
import FormProduct from '../Form'; 
import Data from '../data_from_api/Data'; 

function App() {
  return (
    <>
      <Carousel/>
      <Cards/>
      {/* <GetData/> */}
      <Data/>
      <Photos/>
      <Banner/>
      <Location/>
      <FormProduct/>
    </>    
  )
}

export default App;