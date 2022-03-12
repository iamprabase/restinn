import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sliders from './Sliders';

const BestSeller = ({ bestSeller }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/properties/${bestSeller.id}`}>
        <Sliders sliders={bestSeller.images}/>
        <Card.Img variant="top" src={bestSeller.image} />
      </Link>
      <Card.Body>
        <strong>
          <Link to={`/properties/${bestSeller.id}`}>
            <Card.Title as="div">
              <strong>{bestSeller.name}</strong>
              <i className="mr-2"> {"      "} {bestSeller.price}</i>
            </Card.Title>
          </Link>
        </strong>
      </Card.Body>
    </Card>
  )
}

export default BestSeller