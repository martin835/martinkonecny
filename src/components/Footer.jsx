import { format } from "date-fns";
import { Col, Container, Row } from "react-bootstrap";

function MyFooter() {
  const date = new Date();

  return (
    <Container>
      <Row className="mt-5   footer">
        <Col className="d-flex flex-column flex-sm-row align-items-center justify-content-center">
          <span>
            © {format(date, "Y")} Martin Konečný{" "}
            <span className="d-none d-sm-inline">|</span>
          </span>
          <span className="ml-1 myNav-link">
            <a href="https://github.com/martin835">github</a>{" "}
            <span className="d-none d-sm-inline">|</span>{" "}
          </span>
          <span className="ml-1 myNav-link">
            {" "}
            <a href="https://www.linkedin.com/in/konecnymartin/">LinkedIn</a>
          </span>
        </Col>
      </Row>
      <Row className="mb-3  footer">
        <Col className="d-flex justify-content-center">
          <span className="mt-2 text-small">
            <i>Created with ❤️ in React v18</i>{" "}
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default MyFooter;
