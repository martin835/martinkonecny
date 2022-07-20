import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { GrDownload } from "react-icons/gr";
import resume from "../assets/CV_konecny_2022_v2.pdf";

function MyBio() {
  return (
    <Container>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <h1 className="my-5">My journey to web development.</h1>
          <p>
            For shorter version download my CV{" "}
            <a href={resume} download="konecny-resume.pdf">
              here <GrDownload className="mb-1 ml-1" />
            </a>{" "}
          </p>
          <p className="text-big">
            I didn't study CS although the field has always had an appeal to me.
            I studied economic analysis as a major and informatics in business
            as a minor at the university. It was the minor field that gave me
            some insight into the developers world. After graduating I started
            to work for big tech corporations on various business positions. I
            did partner channel marketing for Microsoft and sales for Oracle.
            These experiences have thought me good understanding of business,
            this was my MBA (figuratively :-). In 2019 I came across a job
            opportunity in public sector that seemed really interesting and it
            was. The position was in newly created behavioral economics unit at
            Ministry for Digitalization in Slovakia. Since I studied economics
            and had experience with big tech, I was a good fit. As it sometimes
            is in the big organizations, our team's responsibilities drifted
            over time more into the UX/UI field. Soon enough I became as a
            product owner responsible for development and implementation of new
            design system for government services. At this point in my career I
            quickly started to drill deeper and deeper into web design and web
            development and I realize I really like it. I studied web
            development on my own for couple of months, but my progress was not
            good enough. So I decided to quit my job and join coding school full
            time. Next 6 months I coded and learned web development every
            working day. After finishing the coding school I got hired by my old
            employer, but this time as a developer. So far, it has been a great
            journey and it will continue ... :-).
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default MyBio;
