import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Sliders from "../components/Sliders";
import PropertyType from "../components/PropertyType";
import BestSeller from "../components/BestSeller";
import Loader from "../utils/Loader";
import AlertMessage from "../utils/AlertMessage";

const HomeScreen = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sliders, setSliders] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [propertyListings, setPropertyListings] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchSliders();
      fetchPropertyRelatedData();
    }
    return () => (mounted = false);
  }, []);

  useEffect(() => {
    if (propertyListings.length) {
      const bestSellersProperty = propertyListings.filter((property) => {
        return property.rating > 2.5;
      });
      setBestSellers(bestSellersProperty);
    }
  }, [propertyListings]);

  useEffect(() => {
    if (error || sliders.length || propertyTypes.length || bestSellers.length) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [sliders, propertyTypes, bestSellers, error]);

  const fetchSliders = () => {
    // declare the data fetching function
    fetch(process.env.REACT_APP_SLIDER_ENDPOINT)
      .then((res) => res.json())
      .then((result) => setSliders(result))
      .catch((err) => setError(err));
  };

  const fetchPropertyRelatedData = () => {
    // declare the data fetching function
    fetch(process.env.REACT_APP_PROPERTY_TYPE_ENDPOINT)
      .then((res) => res.json())
      .then((result) => setPropertyTypes(result))
      .catch((err) => setError(err));

    // declare the data fetching function
    fetch(process.env.REACT_APP_PROPERTY_LISTING_ENDPOINT)
      .then((res) => res.json())
      .then((result) => setPropertyListings(result))
      .catch((err) => setError(err));
  };

  return (
    <Row>
      {error ? (
        <AlertMessage variant="danger">{error} </AlertMessage>
      ) : loading ? (
        <Loader />
      ) : (
        <Container fluid>
          <Row md="12">
            <Col md="12" xs="12" className="carouselContainer">
              <Sliders sliders={sliders} colWidth={12} />
            </Col>
          </Row>
          <Row>
            <h1 className="m-auto m-head"> Property Types </h1>
          </Row>
          <Row>
            {propertyTypes.map((propertyType) => {
              return (
                <Col sm={12} md={6} lg={4} xl={3} key={propertyType.id}>
                  <PropertyType
                    propertyType={propertyType}
                    key={propertyType.id}
                  />
                </Col>
              );
            })}
          </Row>
          <Row>
            <h1 className="m-auto m-head"> Best Sellers </h1>
          </Row>
          <Row>
            {bestSellers.map((bestSeller) => {
              return (
                <Col sm={12} md={6} lg={4} xl={3} key={bestSeller.id}>
                  <BestSeller bestSeller={bestSeller} key={bestSeller.id} />
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
    </Row>
  );
};

export default HomeScreen;
