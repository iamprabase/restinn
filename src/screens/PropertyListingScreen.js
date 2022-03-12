import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Loader from "../utils/Loader";
import AlertMessage from "../utils/AlertMessage";
import PropertyListing from "../components/PropertyListing";

const PropertyListingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [propertyListings, setPropertyListings] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchProperties();
    }
    return () => (mounted = false);
  }, []);

  useEffect(() => {
    if (error || propertyListings.length) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [error, propertyListings]);

  const fetchProperties = () => {
    // declare the data fetching function
    fetch(process.env.REACT_APP_PROPERTY_LISTING_ENDPOINT)
      .then((res) => res.json())
      .then((result) => setPropertyListings(result))
      .catch((err) => setError(err));
  };

  return (
    <Row>
      {loading ? (
        <>
          <Loader />
        </>
      ) : error ? (
        <AlertMessage variant="danger">{error} </AlertMessage>
      ) : (
        propertyListings.map((propertyListed) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3} key={propertyListed.id}>
              <PropertyListing
                propertyListed={propertyListed}
                key={propertyListed.id}
              />
            </Col>
          );
        })
      )}
    </Row>
  );
};

export default PropertyListingScreen;
