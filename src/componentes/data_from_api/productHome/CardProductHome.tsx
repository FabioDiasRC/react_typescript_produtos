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

function CardProductHome(props: Products) {
  return (
    <>
      <div className="col-md-3 ">
        <Card className='container cards__card cards__products'>
          <Card.Img variant="top cards__card__img" src={props.image} />
          <Card.Body>
            <Card.Title className='cards__card__title'>{props.name}</Card.Title>
            <Card.Text className='cards__card__description'>{props.description}</Card.Text>
            <Card.Text className='cards__card__oldPrice'>Preço Parcelado: R${props.oldPrice},00</Card.Text>
            <Card.Text className='cards__card__price'>Preço a vista: R${props.price},00</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
export default CardProductHome;