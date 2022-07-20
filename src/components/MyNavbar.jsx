import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MyNavbar() {
  let navigate = useNavigate();

  return (
    <Container>
      <Row className="mt-4 justify-content-around nav">
        <Col xs={12} sm={6}>
          MARTIN KONECNY
        </Col>
        <Col xs={12} sm={6}>
          <div className="float-sm-right">
            <span className="mr-4 myNav-link" onClick={() => navigate("/")}>
              home{" "}
            </span>

            <span className="mr-4 myNav-link" onClick={() => navigate("/work")}>
              work{" "}
            </span>
            <span className="mr-4 myNav-link" onClick={() => navigate("/bio")}>
              bio
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyNavbar;
