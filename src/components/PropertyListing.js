import { Card, Button } from 'react-bootstrap';
import { Rating } from './Rating'
import { Link } from 'react-router-dom';

const PropertyListing = ({ propertyListed }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/properties/${propertyListed.id}`}>
        <Card.Img variant="top" src={propertyListed.image} />
      </Link>
      <Card.Body>
        <strong>
          <Link to={`/properties/${propertyListed.id}`}>
            <Card.Title as="div">
              <strong>{propertyListed.name}</strong>
            </Card.Title>
          </Link>
        </strong>
        <Card.Title as="div">
          <div className="my-3">
            <Rating
              rating={propertyListed.rating}
              reviews={`${propertyListed.numReviews} reviews`}
            />
          </div>
        </Card.Title>
        <Card.Text>
          <strong>{propertyListed.price}</strong>
        </Card.Text>
        <Card.Text>
          <strong>{propertyListed.location}</strong>
        </Card.Text>
        <Card.Text>
          <strong>{propertyListed.category}</strong>
        </Card.Text>
        <Card.Title>
          <p className="text-strong">{propertyListed.rating > 2.5 ? "Best-Seller" : ""}</p>
        </Card.Title>
        <Button variant="primary">
          <i className="fa fa-book"> Book Now </i>
        </Button>
      </Card.Body>
    </Card>
  )
}

export default PropertyListing