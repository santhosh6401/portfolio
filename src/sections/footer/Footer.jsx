import "./Footer.css";
import { RxInstagramLogo, RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { Col, Container, Row } from "react-bootstrap";
import { ImHeart } from "react-icons/im";

const Footer = () => {
  return (
    <Container className="footer">
      <Row>
        <Col xs={15} sm={11}>
          Developed with <ImHeart color="red"/>  by santhoshkumar
        </Col>
        <Col xs={3} sm={1} className="text-center">
          <a href="https://www.instagram.com/sandie_rep/" target="blank">
            <RxInstagramLogo className="icons" />
          </a>
          <a
            href="https://linkedin.com/in/santhoshkumar-s-563a59230"
            target="blank"
          >
            <RxLinkedinLogo className="icons" />
          </a>
          <a href="https://github.com/santhosh6401" target="blank">
            <RxGithubLogo className="icons" />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
