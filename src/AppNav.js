import { Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const AppNav = () => {
  const dispatch = useDispatch();

  return (
    // <div className="bg-light text-light p-3 d-flex justify-content-end ">
    //   <Link to="/customer-upsert">
    //     <h6>ADD CUSTOMER</h6>
    //   </Link>
    // </div>
    <Navbar bg="info" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        Electricity Bill Management System
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/customer-upsert">
            ADD CUSTOMER
          </Nav.Link>
          <Nav.Link as={Link} to="/customer-list">
            CUSTOMER
          </Nav.Link>
          <Nav.Link as={Link} to="">
            FIND CUSTOMER BY ID
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
