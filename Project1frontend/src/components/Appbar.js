import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Appbar() {
  return (
    <>
      <br />
      <Navbar bg="primary" variant="dark">
        <Container className='nav justify-content-center'>
          <Navbar.Brand href="#home" className='text-center'>Student Application</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Appbar;