import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loader from "../utils/Loader";
import AlertMessage from "../utils/AlertMessage";
import PropertyListing from "../components/PropertyListing";

const PropertyTypeListingScreen = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [allProperties, setAllProperties] = useState([]);
  const [propertyListings, setPropertyListings] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [propertyTypeName, setPropertyTypeName] = useState("");

  useEffect(() => {
    fetchProperties();
  }, []);

  useEffect(() => {
    if (error || allProperties.length) {
      setLoading(false);
    }
  }, [error, allProperties]);

  useEffect(() => {
    let propertyCategory = propertyTypes.find(
      (propertyType) => propertyType.id === id
    );
    let properties = allProperties.filter((property) => {
      return property.category === propertyCategory.name;
    });

    setPropertyTypeName(propertyCategory?.name);
    setPropertyListings(properties);
  }, [id, propertyTypes, allProperties]);

  const fetchProperties = () => {
    // declare the data fetching function
    fetch(process.env.REACT_APP_PROPERTY_TYPE_ENDPOINT)
      .then((res) => res.json())
      .then((result) => setPropertyTypes(result))
      .catch((err) => setError(err));
    // declare the data fetching function
    fetch(process.env.REACT_APP_PROPERTY_LISTING_ENDPOINT)
      .then((res) => res.json())
      .then((result) => setAllProperties(result))
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
        <>
          <Col xs="12" className="text-center">
            <h1 className="m-auto m-head">{propertyTypeName}</h1>
          </Col>
          {propertyListings.length ? (
            <>
              {propertyListings.map((propertyListed) => {
                return (
                  <Col sm={12} md={6} lg={4} xl={3} key={propertyListed.id}>
                    <PropertyListing
                      propertyListed={propertyListed}
                      key={propertyListed.id}
                    />
                  </Col>
                );
              })}
            </>
          ) : (
            <AlertMessage variant="danger">No Properties</AlertMessage>
          )}
        </>
      )}
    </Row>
  );
};

export default PropertyTypeListingScreen;
