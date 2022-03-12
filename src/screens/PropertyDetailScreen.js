import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  Image,
  ListGroup,
  Card,
  Badge,
} from "react-bootstrap";
import { Rating } from "../components/Rating";
import Loader from "../utils/Loader";
import AlertMessage from "../utils/AlertMessage";
import { useParams } from "react-router-dom";

const PropertyDetailScreen = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();
  const [propertyListings, setPropertyListings] = useState([]);
  const [property, setProperty] = useState({});

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchProperty();
    }
    return () => (mounted = false);
  }, [propertyListings, id]);

  useEffect(() => {
    if (propertyListings.length) {
      const obj = propertyListings.find((property) => property.id === id);
      if (Object.keys(obj).length === 0) setError("No Properties Found");
      setProperty(obj);
    }
  }, [propertyListings]);

  useEffect(() => {
    if (error || Object.keys(property).length) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [error, property, propertyListings]);

  const fetchProperty = () => {
    // declare the data fetching function
    fetch(process.env.REACT_APP_PROPERTY_LISTING_ENDPOINT)
      .then((res) => res.json())
      .then((result) => setPropertyListings(result))
      .catch((err) => setError(err));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <AlertMessage variant="danger">{error} </AlertMessage>
      ) : (
        <div>
          <LinkContainer to="/">
            <Button variant="secondary" className="mb-5">
              <i className="fa fa-arrow-left"></i> Back
            </Button>
          </LinkContainer>
          <Card>
            <Row>
              <Col md={6}>
                <Image src={property.image} alt={property.name} fluid />
              </Col>
              <Col md={3}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>{property.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Rating
                      rating={property.rating}
                      reviews={`${property.numReviews} reviews`}
                    />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h3>{property.price}</h3>
                    <Badge bg={property.rating > 2.5 ? "info" : ""}>
                      {property.rating > 2.5 ? "Best-Seller" : ""}
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <p>{property.description}</p>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Button variant="primary">
                      <i className="fa fa-book"></i> Book Now
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3}>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Price:</Col>
                        <Col>${property.price}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Property Type:</Col>
                        <Col>
                          <Link to="/">
                            <p className="text-primary">{property.category}</p>
                          </Link>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Location:</Col>
                        <Col>
                          <p className="text-primary">{property.location}</p>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Amenities:</Col>
                        <Col>
                          <p className="text-primary">
                            {property.amenities.map((amenity, key) => {
                              return (
                                <span key={key}>
                                  <Badge bg="info" className="mr-2">
                                    {amenity}
                                  </Badge>
                                </span>
                              );
                            })}
                          </p>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>House Rules:</Col>
                        <Col>
                          {property.house_rules.map((rule, key) => {
                            return (
                              <p key={key} bg="info" className="mr-2">
                                {key + 1}. {rule}
                              </p>
                            );
                          })}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </Card>
        </div>
      )}
    </>
  );
};

export default PropertyDetailScreen;
