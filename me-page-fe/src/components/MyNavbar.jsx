import { Col, Container, Row } from "react-bootstrap";

function MyNavbar() {
  return (
    <Container>
      <Row className="mt-4 justify-content-around nav">
        <Col xs={12} sm={6}>
          MARTIN KONECNY
        </Col>
        <Col xs={12} sm={6}>
          <div className="float-sm-right">
            <span className="mr-4 myNav-link">home </span>

            <span className="mr-4 myNav-link">work </span>
            <span className="mr-4 myNav-link">bio</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyNavbar;
