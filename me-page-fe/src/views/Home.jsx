import { Col, Container, Row } from "react-bootstrap";
import { RiExternalLinkLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <h1 className="my-5">Hello, I'm Martin.</h1>
          <p className="text-big">
            I am a full-stack web developer with knowledge of ReactJS, NodeJS
            with Express, Bootstrap, MongoDB and PostgreSQL. I have experimented
            with TypeScript, Jest and Swagger. You can read more about my
            developer journey <Link to="/">here</Link>. I am currently working
            for public sector organization in Slovakia developing a web app for
            collecting feedback from the users. You can check out some of my
            work here. If you are interested in working with me, you can reach
            me on{" "}
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
  );
}

export default Home;
