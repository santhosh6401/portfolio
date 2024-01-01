import { Container } from "react-bootstrap";
import "./Certification.css";
import Carousel from "react-bootstrap/Carousel";
import DigitalMarketing from "./../../assets/digital marketing.png";
import ReactJs from "./../../assets/internshala.png";
import C from "./../../assets/udemy_c.png";
import C_Pointer from "./../../assets/c_pointer.png";
import Spring_Boot from "./../../assets/spring_boot.png";

const Certification = () => {
  return (
    <div className="card">
      <Container>
        <h6 className="text-center p-3 topic">Certification</h6>
        <Carousel controls={true} indicators={true} className="carousel-dark">
          <Carousel.Item interval={2500}>
            <img
              className="image"
              src={Spring_Boot}
              alt="Master in Spring boot 3 from udemy"
            />

            <p className="text-dark p-5">Master in Spring boot 3</p>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="image"
              src={DigitalMarketing}
              alt="digital maraketing certificate"
            />
            <p className="text-dark p-5">Fundamental of Digital Marketing</p>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="image"
              src={ReactJs}
              alt="React Js Certificate from Internshala"
            />

            <p className="text-dark p-5">React JS </p>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="image"
              src={C}
              alt="Advanced C Programming Certificate from Udemy"
            />

            <p className="text-dark p-5">Advanced in C Programming</p>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="image"
              src={C_Pointer}
              alt="Advanced C Programming Pointer from Udemy"
            />

            <p className="text-dark p-5">Advanced in C Programming Pointer</p>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Certification;
