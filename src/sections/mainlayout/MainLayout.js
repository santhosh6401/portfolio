import "./MainLayout.css";

import Logo from "./../../assets/logo_portfolio.png";
import { Col, Row, Container } from "react-bootstrap";
import About from "../about/About";
import Home from "../home/Home";
import Education from "../education/Education";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import Certification from "../certifications/Certification";
import Resume from "./../../assets/santhoshkumar_CV.pdf";
import profile_image from "../../assets/Profile.jpeg";

const Navbar = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const setHome = () => {
    setIndex(0);
  };

  const setAbout = () => {
    setIndex(1);
  };

  const setEducation = () => {
    setIndex(2);
  };

  const setCertificate = () => {
    setIndex(3);
  };



  return (
    <>
      <Container className="content">
        <Row>
          <Col md={3}>
            <img
              src={profile_image}
              alt="profile_image"
              className="profile-image"
            />
          </Col>
          <Col md={9}>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              indicators={false}
              controls={false}
            >
              <Carousel.Item interval={10000}>
                <Home />
              </Carousel.Item>
              <Carousel.Item interval={10000}>
                <About />
              </Carousel.Item>
              <Carousel.Item interval={10000}>
                <Education />
              </Carousel.Item>
              <Carousel.Item interval={20000}>
                <Certification />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      <Container className="header">
        <Row>
          <Col md={3}>
            <img src={Logo} alt="Logo" height={60} width={180} />
          </Col>
          <Col md={4}></Col>
          <Col md={1} onClick={setHome}>
            <p className="links">Home</p>
          </Col>

          <Col md={1} onClick={setAbout}>
            <p className="links">About</p>
          </Col>

          <Col md={1} onClick={setEducation}>
            <p className="links">Education</p>
          </Col>
          <Col md={1} onClick={setCertificate}>
            <p className="links">Certification</p>
          </Col>
          <Col md={1}>
            <a href={Resume} download="SanthoshKumar_Resume" target="_blank" rel="noreferrer">
              <p className="links">Download CV</p>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Navbar;
