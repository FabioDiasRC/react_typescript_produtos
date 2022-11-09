import Data from '../data_from_api/Data'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/stylesheet.scss';
import Cards from '../Cards';

function Produtos() {
  return (
    <>
      <Cards />
      <Data />
      <p style={{marginBottom: "20px"}}></p>
    </>
  )
}

export default Produtos;