import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div>
      {" "}
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home" className="ml-5">
          MARTIN KONECNY
        </Navbar.Brand>
        <Nav className="ml-auto mr-5">
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#features">WORK</Nav.Link>
          <Nav.Link href="#pricing">WRITING</Nav.Link>
        </Nav>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <h1>Hello, I'm Martin.</h1>
            <p>asdasdasda...</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
