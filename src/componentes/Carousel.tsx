import '../scss/stylesheet.scss'
import Carousel from 'react-bootstrap/Carousel';
import Productdevelopment from '../img/productdevelopment.png'
import Productonline from '../img/productonline.png'
import Productmobile from '../img/productmobile.png'

function CarouselComponent() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel__img"
          src={Productdevelopment}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel__img"
          src={Productmobile}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel__img"
          src={Productonline}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;