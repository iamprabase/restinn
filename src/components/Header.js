import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../logo.svg";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={`${logo}`}
                width="30"
                height="30"
                className="d-inline-block w-20"
                alt="React Bootstrap logo"
              />
              REST Inn
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="ml-auto">
            <LinkContainer to="/properties">
              <Nav.Link>
                <i className="fa fa-map-marker"></i>Vacation Property
              </Nav.Link>
            </LinkContainer>

            <NavDropdown
              title={
                <span>
                  <i className="fa fa-user"></i>
                </span>
              }
              id="navbarScrollingDropdown">
              <NavDropdown.Item href="/login">
              <i className="fa fa-sign-in"></i>SignIn
              </NavDropdown.Item>
              <NavDropdown.Item href="/register">
              <i className="fa fa-user-plus"></i>SingUp
              </NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success pb-2">Search</Button>
            </Form>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </header>
  );
};

export default Header;
