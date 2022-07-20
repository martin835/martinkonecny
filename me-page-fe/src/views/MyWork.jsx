import { Col, Container, Row } from "react-bootstrap";
import { RiExternalLinkLine } from "react-icons/ri";
import tellGov1 from "../assets/tellGov1.png";
import linkedin1 from "../assets/linkedin1.png";
import seatchTS1 from "../assets/seatchTS1.png";
import whatsup1 from "../assets/whatsup1.png";

function MyWork() {
  return (
    <Container>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <h1 className="my-5">My work.</h1>

          <p className="text-medium ">
            These are some of my projects or projects I significantly
            contributed to. <br />
            Check out my github{" "}
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
        <Col md={{ span: 1 }} className="big-number ">
          1.
        </Col>
        <Col md={8}>
          <a
            href="https://github.com/martin835/odkaz-pre-stat-FE"
            className="h2-nolink"
          >
            <h2 className="mt-4">
              Tell the government - web app{" "}
              <sup>
                <RiExternalLinkLine />
              </sup>
            </h2>{" "}
          </a>
          <div className="img-heroProject-container">
            <img src={tellGov1} className="img-fluid" />
          </div>
          <p className="text-medium mt-4">
            This app is for collecting feedback from the users on public service
            digital services in Slovakia. Asking for a review or feedback is an
            integral part of most of the commercial services, but in public
            sector (at least in Slovakia) this is not the case. This simple
            web-app is meant to fill this gap. <br />
            The app is still in "prototype" stage, user testing is the next step
            in development
          </p>

          <h3>DESIGN</h3>
          <p className="text-medium">
            Design of the front-end is based on{" "}
            <a href="https://idsk.gov.sk/">
              Design system for digital public services
              <sup>
                <RiExternalLinkLine />
              </sup>
            </a>{" "}
            in order to comply with the state regulations.
          </p>
          <h3>FEATURES</h3>
          <ul className="text-medium">
            <li>Posting a review and feedback for a specific service</li>
            <li>Liking and commenting on reviews of other users</li>
            <li>Benchmark of reviewed services </li>
            <li>Localization into English and Slovak language</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 1 }} className="big-number">
          2.
        </Col>
        <Col md={8}>
          <a
            href="https://github.com/martin835/FE-LinkedIn-clone"
            className="h2-nolink"
          >
            <h2 className=" mt-4">
              LinkedIn clone{" "}
              <sup>
                <RiExternalLinkLine />
              </sup>
            </h2>{" "}
          </a>
          <div className="img-heroProject-container">
            <img src={linkedin1} className="img-fluid " />
          </div>
          <p className="text-medium mt-4">
            This application is a team work of developers from Epicode school.
            It is realistic LinkedIn clone with profile creation, friend search,
            newsfeed, posts, adding experience to a profile, uploading profile
            picture etc...
          </p>
          <h3>USED TECH</h3>
          <ul className="text-medium">
            <li>
              Front-end
              <ul>
                <li>React + Bootstrap</li>
              </ul>
            </li>
            <li>
              Back-end
              <ul>
                <li>NodeJS + MongoDB</li>
                <li>Cloudinary</li>
              </ul>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 1 }} className="big-number">
          3.
        </Col>
        <Col md={8}>
          <a
            href="https://github.com/martin835/M7-TypeScript-music-search"
            className="h2-nolink"
          >
            <h2 className=" mt-4">
              Music search app with TypeScript{" "}
              <sup>
                <RiExternalLinkLine />
              </sup>
            </h2>{" "}
          </a>
          <div className="img-heroProject-container">
            <img src={seatchTS1} className="img-fluid " />
          </div>
          <p className="text-medium mt-4">
            Simple app to search for music through 3rd party API. Goal of the
            project was to practice TypeScript.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 1 }} className="big-number">
          4.
        </Col>
        <Col md={8}>
          <a
            href="https://github.com/martin835/chatApp-FE"
            className="h2-nolink"
          >
            <h2 className=" mt-4">
              ChatApp - WhatsApp clone{" "}
              <sup>
                <RiExternalLinkLine />
              </sup>
            </h2>{" "}
          </a>
          <div className="img-heroProject-container">
            <img src={whatsup1} className="img-fluid " />
          </div>
          <p className="text-medium mt-4">
            This is whatsApp-like app to experiment with web sockets. It is for
            learning purposes only with no intention for production.
          </p>
          <h3>USED TECH</h3>
          <ul className="text-medium">
            <li>ReactJS on the front-end</li>
            <li>NODE JS + MongoDB on the back-end</li>
            <li>Socket.io library to manage web sockets</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default MyWork;
