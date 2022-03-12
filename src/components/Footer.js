import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="mt-5 pt-5 pb-5 footer">
      <Container>
        <Row>
          <Col lg="5" xs="12" className="about-company">
            <h2>Rest Inn</h2>
            <p className="pr-5 text-white-50">
              Visit Us for more
            </p>
            <p>
              <a href="#">
                <i className="fa fa-facebook-square mr-1"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </p>
          </Col>
          <Col lg="3" xs="12" className="links">
            <h4 className="mt-lg-0 mt-sm-3">Links</h4>
            <ul className="m-0 p-0">
              <li>
                - <a href="#">About Us</a>
              </li>
              <li>
                - <a href="#">Contact Us</a>
              </li>
              <li>
                - <a href="#">Visit Us</a>
              </li>
            </ul>
          </Col>
          <Col lg="4" xs="12" className="location">
            <h4 className="mt-lg-0 mt-sm-4">Location</h4>
            <p>Canada</p>
            <p className="mb-0">
              <i className="fa fa-phone mr-3"></i>(123) 456 789 0
            </p>
            <p>
              <i className="fa fa-envelope-o mr-3"></i>info@propertyinn.com
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md="12" className="copyright">
            <p className="">
              <small className="text-white-50">Rest Inn © 2022. All Rights Reserved.</small>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
