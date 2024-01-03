import { Container, Row, Col, Table, ProgressBar } from "react-bootstrap";
import "./About.css";
import { RxTriangleRight } from "react-icons/rx";
import { FaDesktop, FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiSpringboot } from "react-icons/si";

const About = () => {
  return (
    <Container>
      <div className="section">
        {/* ABOUT ME */}
        <h5> &nbsp;ABOUT ME </h5>
        <div className="content-line"></div>
        <Container>
          <Row>
            <Col className="text-field" md={5}>
              Hello there! My name is <b>Santhosh kumar</b>. I am a Microservice
              & Frontend Developer , and I'm very passionate and dedicated to my
              work. With 1 years experience as a professional a microservice
              developer, I have acquired the skills and knowledge necessary to
              make your project a success.
            </Col>
            <Col className="text-field-2">
              <Table>
                <tr>
                  <td className="table-title">Name:</td>
                  <td>Santhosh kumar s</td>
                </tr>
                <tr>
                  <td className="table-title">Study:</td>
                  <td>Anna University</td>
                </tr>
                <tr>
                  <td className="table-title">Degree:</td>
                  <td>B.E - Computer Science and Engineering</td>
                </tr>
                <tr>
                  <td className="table-title">Mail:</td>
                  <td>santhoshkumar061101@gmail.com</td>
                </tr>
                <tr>
                  <td className="table-title">Phone:</td>
                  <td>+91 97880 09217</td>
                </tr>
              </Table>
            </Col>
          </Row>
        </Container>
        <br />

        {/* PROGRAMMING & INTEREST */}

        <div className="section">
          <Row>
            <Col className="programming" md={5}>
              <h5> &nbsp;TECH SKILLS</h5>
              <div className="interest text-field">
                <div className="skill">
                  <FaJava /> JAVA
                  <ProgressBar
                    now={80}
                    variant="secondary"
                    style={{ height: 3 }}
                  />
                </div>
                <div className="skill">
                  <FaReact /> REACT JS
                  <ProgressBar
                    now={65}
                    variant="secondary"
                    style={{ height: 3 }}
                  />
                </div>
                <div className="skill">
                  <SiSpringboot /> Spring Boot
                  <ProgressBar
                    now={70}
                    variant="secondary"
                    style={{ height: 3 }}
                  />
                </div>
                <div className="skill">
                  <FaDesktop /> C
                  <ProgressBar
                    now={75}
                    variant="secondary"
                    style={{ height: 3 }}
                  />
                </div>
                <div className="skill">
                  <DiMongodb /> MONGO DB
                  <ProgressBar
                    now={75}
                    variant="secondary"
                    style={{ height: 3 }}
                  />
                </div>
              </div>
            </Col>
            <Col>
              <h5>&nbsp;INTERESTS</h5>
              <div className="interest text-field">
                <p className="skill">
                  <RxTriangleRight /> Full-stack development
                </p>
                <p className="skill">
                  <RxTriangleRight /> Mobile-app development
                </p>
                <p className="skill">
                  <RxTriangleRight /> Fitness
                </p>
                <p className="skill">
                  <RxTriangleRight /> Travelling
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default About;
