import '../scss/stylesheet.scss';
import Productdevelopment from '../img/productdevelopment.png'

function Photos() {
  return (
    <>
      <div className="container photos">

        <div className="row photos__row">
          <div className="col-md-5">
            <img src={Productdevelopment} alt="" className='photos__img' />
          </div>
          <div className="col-md-7 photos__text">
            <h2>Text</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero natus et aut quam ullam inventore unde dolores, tenetur itaque nemo doloremque accusantium doloribus debitis totam ad possimus illum optio quisquam!</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-7 photos__text">
            <h2>Text</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero natus et aut quam ullam inventore unde dolores, tenetur itaque nemo doloremque accusantium doloribus debitis totam ad possimus illum optio quisquam!</p>
          </div>
          <div className="col-md-5">
            <img src={Productdevelopment} alt="" className='photos__img' />
          </div>
        </div>

      </div>
    </>
  )
}

export default Photos;