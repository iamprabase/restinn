import { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import homeScreenSlidersData from '../data/homeScreenSlidersData';
import propertyTypesData from '../data/propertyTypesData';
import propertyListingData from '../data/propertyListingData';
import Sliders from '../components/Sliders';
import PropertyType from '../components/PropertyType';
import BestSeller from '../components/BestSeller';
import Loader from '../utils/Loader';
import AlertMessage from '../utils/AlertMessage';

const HomeScreen = () => {
  const loading = false;
  const error = false;
  const [sliders, setSliders] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    setSliders(homeScreenSlidersData)
    setPropertyTypes(propertyTypesData)
    const bestSellersProperty = propertyListingData.filter((property) => {return property.rating > 2.5})
    setBestSellers(bestSellersProperty)
  }, []);

  return (
    <Row>
      {loading ? (
        <>
        <Loader />
        </>
      ) : error ? (
        <AlertMessage variant="danger">{error} </AlertMessage>
      ) : 
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
          {(
            propertyTypes.map((propertyType) => {
              return (
                <Col sm={12} md={6} lg={4} xl={3} key={propertyType.id}>
                  <PropertyType propertyType={propertyType} key={propertyType.id} />
                </Col>
              );
            })
          )}
      </Row>
      <Row>
        <h1 className="m-auto m-head"> Best Sellers </h1>
      </Row>
      <Row>
          {(
            bestSellers.map((bestSeller) => {
              return (
                <Col sm={12} md={6} lg={4} xl={3} key={bestSeller.id}>
                  <BestSeller bestSeller={bestSeller} key={bestSeller.id} />
                </Col>
              );
            })
          )}
      </Row>
      </Container>
      }
    </Row>
  );
};

export default HomeScreen;