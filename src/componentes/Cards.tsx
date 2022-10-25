import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../scss/stylesheet.scss';
import Productdevelopment from '../img/productdevelopment.png'

function Cards() {
  return (
    <>
      <div className="container cards">
        <h2 className='cards__title'>Produtos em destaque</h2>

        <Row>
          <Col className='cards__col'>
            <Card  className='cards__card' style={{ width: '20rem' }}>
              <Card.Img variant="top cards__card__img" src={Productdevelopment} />
              <Card.Body>
                <Card.Title>Produtos favortios</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button className='cards__card__button teste'>Favoritos</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className='cards__col'>
            <Card className='cards__card' style={{ width: '20rem' }}>
              <Card.Img variant="top cards__card__img" src={Productdevelopment} />
              <Card.Body>
                <Card.Title>Carrinho</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Carrinho</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className='cards__col'>
            <Card className='cards__card' style={{ width: '20rem' }}>
              <Card.Img variant="top cards__card__img" src={Productdevelopment} />
              <Card.Body>
                <Card.Title>Mais comprados</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Mais comprados</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </div>
    </>
  )
}

export default Cards;