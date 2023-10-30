import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const CustomNavbar =()=> {
  return (
    <Navbar expand="lg" id='bar' className="bg-none position-sticky top-0 z-index-5">
      <Container fluid>
        <img src="https://ukcareguide.co.uk/media/borrow-books.png" width={50} alt="library brand" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='fw-bold fs-5 d-none d-md-inline mx-2'>Home</Nav.Link>
            <Nav.Link href="#link" className='fw-bold fs-5 d-none d-md-inline me-2'>About</Nav.Link>
            <Nav.Link href="#link" className='fw-bold fs-5 d-none d-md-inline me-2'>Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;