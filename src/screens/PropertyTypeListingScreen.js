import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import propertyListingData from "../data/propertyListingData";
import propertyTypesData from "../data/propertyTypesData";
import Loader from "../utils/Loader";
import AlertMessage from "../utils/AlertMessage";
import PropertyListing from "../components/PropertyListing";

const PropertyTypeListingScreen = () => {
  const loading = false;
  const error = false;
  const {id} = useParams()
  const [allProperties, setAllProperties] = useState([]);
  const [propertyListings, setPropertyListings] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [propertyTypeName, setPropertyTypeName] = useState("");

  useEffect(() => {
    setPropertyTypes(propertyTypesData);
    setAllProperties(propertyListingData);
  }, [id]);

  useEffect(() => {
    let propertyCategory = propertyTypes.find(propertyType => propertyType.id === id) 
    let properties = allProperties.filter((property) => { return property.category === propertyCategory.name })
    setPropertyListings(properties);
    setPropertyTypeName(propertyCategory?.name)
  }, [id, propertyTypes, allProperties])
  

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
            <h1 className="m-auto m-head">{propertyTypeName}</h1>
            <Row>
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
            </Row>
        </>  
          )}
    </Row>
  );
};

export default PropertyTypeListingScreen;
