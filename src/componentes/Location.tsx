import '../scss/stylesheet.scss';
import Shop from '../img/cyberpunk__shop.png'

function Location() {
  return (
    <div className='container'>
      <h1 className='location__title'>Entre em contato</h1>
      <div className="row">
        <div className="col-4 ">
          <img src={Shop} className='location__img' />
        </div>

        <div className="col-8">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.823497776423!2d-45.532300685370146!3d-22.993517046751414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccf98c86ae0871%3A0x82c71808307da79a!2zTWVyY2F6w6Nv!5e0!3m2!1sen!2sbr!4v1666808410304!5m2!1sen!2sbr" width="800" height="600"></iframe>
        </div>

      </div>
    </div>
  )
}

export default Location;