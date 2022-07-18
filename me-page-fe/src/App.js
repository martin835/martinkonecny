import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";
import { RiExternalLinkLine } from "react-icons/ri";

function App() {
  return (
    <div>
      {" "}
      {/* <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home" className="ml-5">
          MARTIN KONECNY
        </Navbar.Brand>
        <Nav className="ml-auto mr-5">
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#features">WORK</Nav.Link>
          <Nav.Link href="#pricing">WRITING</Nav.Link>
        </Nav>
      </Navbar> */}
      <Container>
        <Row className="mt-4 justify-content-around nav">
          <Col xs={12} sm={6}>
            MARTIN KONECNY
          </Col>
          <Col xs={12} sm={6}>
            <div className="float-sm-right">
              <span className="mr-4">home </span>

              <span className="mr-4">work </span>
              <span className="mr-4">bio</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <h1 className="my-5">Hello, I'm Martin.</h1>
            <p className="text-big">
              I am a full-stack web developer with knowledge of ReactJS, NodeJS
              with Express, Bootstrap, MongoDB and PostgreSQL. I have
              experimented with TypeScript, Jest and Swagger. You can read more
              about my developer journey <Link to="/">here</Link>. I am
              currently working for public sector organization in Slovakia
              developing a web app for collecting feedback from the users. You
              can check out some of my work here. If you are interested in
              working with me, you can reach me on{" "}
              <a href="https://www.linkedin.com/in/konecnymartin/">
                LinkedIn{" "}
                <sup>
                  <RiExternalLinkLine />
                </sup>
              </a>{" "}
              or shoot me an{" "}
              <a href="mailto:mk.martinkonecny@gmail.com">
                email{" "}
                <sup>
                  <RiExternalLinkLine />
                </sup>
              </a>
              .
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
