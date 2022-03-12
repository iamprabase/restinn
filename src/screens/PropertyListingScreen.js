import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import propertyListingData from "../data/propertyListingData";
import Loader from "../utils/Loader";
import AlertMessage from "../utils/AlertMessage";
import PropertyListing from "../components/PropertyListing";

const PropertyListingScreen = () => {
  const loading = false;
  const error = false;
  const [propertyListings, setPropertyListings] = useState([]);

  useEffect(() => {
    setPropertyListings(propertyListingData);
  }, []);

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
