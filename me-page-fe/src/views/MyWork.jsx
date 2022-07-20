import { Col, Container, Row } from "react-bootstrap";
import { RiExternalLinkLine } from "react-icons/ri";

function MyWork() {
  return (
    <Container>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <h1 className="my-5">My work.</h1>

          <p>
            These are my projects or projects I significantly contributed to.{" "}
            <br />
            Check my github{" "}
            <a href="https://github.com/martin835">
              here{" "}
              <sup>
                <RiExternalLinkLine />
              </sup>
            </a>{" "}
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 1 }} className="big-number">
          1.
        </Col>
        <Col>
          <h2>Tell the government - web app</h2>
          <p>
            This app is for collecting feedback from the users on public service
            digital services in Slovakia. Asking for a review or feedback is an
            integral part of most of the commecrial services, but in public
            sector (at least in Slovakia) this is not the case. This simple
            web-app is meant to fill this gap. image DESIGN Design of the
            front-end is based on Design system for digital public services (
            https://idsk.gov.sk/ ) in order to comply with the state
            regulations. FEATURES Posting a review and feedback for a specific
            service Liking and commenting on reviews of other users Benchmark of
            reviewed services Future plans -The app is still in "prototype"
            phase -User testing -Finishing main features and writing tests
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 1 }} className="big-number">
          2.
        </Col>
        <Col>
          <h2>LinkedIn clone - web app</h2>
          <p>
            This app is for collecting feedback from the users on public service
            digital services in Slovakia. Asking for a review or feedback is an
            integral part of most of the commecrial services, but in public
            sector (at least in Slovakia) this is not the case. This simple
            web-app is meant to fill this gap. image DESIGN Design of the
            front-end is based on Design system for digital public services (
            https://idsk.gov.sk/ ) in order to comply with the state
            regulations. FEATURES Posting a review and feedback for a specific
            service Liking and commenting on reviews of other users Benchmark of
            reviewed services Future plans -The app is still in "prototype"
            phase -User testing -Finishing main features and writing tests
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default MyWork;
