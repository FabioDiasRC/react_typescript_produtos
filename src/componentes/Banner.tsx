import '../scss/stylesheet.scss';
import Productdevelopment from '../img/productdevelopment.png'

function Banner() {
  return (
    <div className='banner'>
      <div className="container banner__container">
        <h1 className='banner__title'>BANNER</h1>
        <h1 className='banner__text'><span className='banner__span'>Prod</span>utos e muito mais</h1>
        <button className='banner__btn'> Produtos </button>
      </div>
    </div>
  )
}

export default Banner;