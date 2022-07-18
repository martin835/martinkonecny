import { format } from "date-fns";
import { Col, Container, Row } from "react-bootstrap";

function MyFooter() {
  const date = new Date();

  return (
    <Container>
      <Row className="mt-5 mb-3  footer">
        <Col className="d-flex justify-content-center">
          <span>© {format(date, "Y")} Martin Konečný |</span>
          <span className="ml-1 myNav-link">
            <a href="https://github.com/martin835">github</a> |{" "}
          </span>
          <span className="ml-1 myNav-link">
            {" "}
            <a href="https://www.linkedin.com/in/konecnymartin/">LinkedIn</a>
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default MyFooter;
