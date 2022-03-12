import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PropertyType = ({ propertyType }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`property-types/${propertyType.id}`}>
        <Card.Img variant="top" src={propertyType.image} />
      </Link>
      <Card.Body>
        <strong>
          <Link to={`property-types/${propertyType.id}`}>
            <Card.Title as="div">
              <strong>{propertyType.name}</strong>
            </Card.Title>
          </Link>
        </strong>
      </Card.Body>
    </Card>
  )
}

export default PropertyType