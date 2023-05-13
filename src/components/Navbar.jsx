import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <Nav className="justify-content-evenly bg-dark py-3">
        <Link to="/">
          <img src="https://img.icons8.com/?size=512&id=9XdpjpNSX6jK&format=png" alt="Logo" height="40" width="auto" />
        </Link>
        <Nav.Item>
          <Link to="/" className="nav-link">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/form" className="nav-link">Form</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/about" className="nav-link">About</Link>
        </Nav.Item>
        <Nav.Item>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navbar;
