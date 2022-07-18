import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MyBio() {
  let navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <h1 className="my-5">My journey to web development.</h1>
          <p className="text-big">
            I was not born a web developer although the field has always had an
            appeal to me. I studied economic analysis as a major and informatics
            in business as a minor at the university. It was the minor field
            that gave me some insight into the developers world. After
            graduating I started to work for big tech corporations on various
            business positions. I did partner channel marketing for Microsoft
            and sales for Oracle. These experiences have thought me good
            understanding of business, this was my MBA (figuratively :-). In
            2019 I came across a job opportunity in public sector that seemed
            really interesting and it was. The position was in newly created
            behavioral economics unit at Ministry for Digitalization in
            Slovakia. Since I studied economics and had experience with big
            tech, I was a good fit. As it sometimes is in the big organizations,
            our team's responsibilities drifted over time more into the UX/UI
            field. Soon enough I was as a product owner responsible for
            development and implementation of new design system for government
            services. At this point in my career I
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default MyBio;
