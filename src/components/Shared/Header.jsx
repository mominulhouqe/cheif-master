import { Link } from 'react-router-dom';
import { FaAccusoft } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Banner from '../Banner/Banner';
import { BsFillPersonFill , BsFillArrowDownRightSquareFill} from 'react-icons/bs';


const Header = () => {
  return (
    <>
      <div>
        <Navbar bg="light" expand="lg">
          <Container className='p-3'>
            <Navbar.Brand href="#home" className="fw-bold">
              Qichen
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link
                  to="/"
                  className=" text-decoration-none mx-4"
                >
                  Home
                </Link>
                <Link
                  to="/blog"
                  className=" text-decoration-none mx-4"
                >
                  Blog
                </Link>
                <Link
                  to="/pages"
                  className=" text-decoration-none mx-4"
                >
                  Pages
                </Link>
                <Link
                  to="/profile"
                  className=" text-decoration-none mx-4"
                >
                  <BsFillPersonFill></BsFillPersonFill>
                </Link>
                <Link
                  to="/login"
                  className=" text-decoration-none mx-4"
                >
                  Login 
                </Link>
                <Link
                  to="/register"
                  className=" text-decoration-none mx-4"
                >
                  Register
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Banner></Banner>
      </div>
    </>
  );
};

export default Header;
