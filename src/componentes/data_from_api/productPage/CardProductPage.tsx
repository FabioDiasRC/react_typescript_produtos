import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import '../../../scss/stylesheet.scss';

type Products = {
  image: string,
  name: string,
  description: string,
  oldPrice: number,
  price: number
};

function CardProduct(props: Products) {
  return (
    <>
      <div className="col-md-6">
        <Card className='container cards__card cards__products'>
          <div className="row">
            <div className="col-md-6">
              <Card.Img variant="top cards__card__img" src={props.image} />
            </div>
            <div className="col-md-6">
              <Card.Body>
                <Card.Title className='cards__card__title'>{props.name}</Card.Title>
                <Card.Text className='cards__card__description'>{props.description}</Card.Text>
                <Card.Text className='cards__card__oldPrice'>Preço Parcelado: R${props.oldPrice},00</Card.Text>
                <Card.Text className='cards__card__price'>Preço a vista: R${props.price},00</Card.Text>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}
export default CardProduct;