import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MPLogo from './MPLogo';

function TopBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <MPLogo></MPLogo>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default TopBar;