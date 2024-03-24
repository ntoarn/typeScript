import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <NavLink className="nav-link" to="/">
        <Navbar.Brand>Home</Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink className="nav-link" to="/shop">
            <Nav.Link>Shop</Nav.Link>
          </NavLink>
          <NavLink className="nav-link" to="/login">
            <Nav.Link>Login</Nav.Link>
          </NavLink>
          <NavLink className="nav-link" to="/register">
            <Nav.Link>Register</Nav.Link>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
