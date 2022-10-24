import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Alert from "react-bootstrap/Alert";
import ListGroup from "react-bootstrap/ListGroup";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Footer() {
  return (
    <div className="footer-bg">
      <div className=" text-center">
        <Alert>
          <Alert.Heading>
            {" "}
            <Button size="sm" variant="outline-warning">
              <h2>Hey,</h2>{" "}
            </Button>{" "}
            <Button variant="outline-warning">
              <h2>nice </h2>{" "}
            </Button>{" "}
            <Button size="sm" variant="outline-warning">
              <h2>to </h2>{" "}
            </Button>{" "}
            <Button variant="outline-warning">
              <h2>see </h2>{" "}
            </Button>{" "}
            <Button size="sm" variant="outline-warning">
              <h2>you!</h2>{" "}
            </Button>{" "}
          </Alert.Heading>

          <hr />
          <p className="mb-0">
            This e-commerce page is a joint final project of 3 graduates of the
            DCI school, the faculty of WEB DEVELOPMENT. This is our first joint
            page development experience. We really hope that you enjoyed our
            presentation. Thank you for your visit!!!
          </p>
        </Alert>
      </div>
      <Container className="  py-3 pd-3 ">
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <strong> KORNELI NASTAS - Frond End Developer </strong>
                </Accordion.Header>

                <Accordion.Body>
                  {" "}
                  <p>
                    Frond End Web Developer based in Hamburg. Understanding UI
                    and UX design principles came naturally due to my
                    photography background.
                  </p>
                  <p>
                    I noticed that my heart beats for Frontend throughout my
                    journey, so I focused on HTML, CSS, JS and React. Do you
                    think we should work together?
                  </p>
                  <Card.Link href="https://www.linkedin.com/in/korneli-nastas-0b1249170/">
                    <Button size="sm" variant="success">
                      LinkedIn
                    </Button>{" "}
                  </Card.Link>
                  <Card.Link href="https://github.com/korneli1970">
                    <Button size="sm" variant="info">
                      GitHub
                    </Button>{" "}
                  </Card.Link>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <strong> ELENA GARILIS - Full Stack Developer</strong>
                </Accordion.Header>
                <Accordion.Body>
                  {" "}
                  <p>
                    I am motivated and community-focused Frontend developer. My
                    previous working experience made me the good team player,
                    fast learner, able to pick up new skills and juggle
                    different projects and roles with relative ease
                  </p>
                  <p>
                    Ready to start new career continuing to learn in a agile
                    environment
                  </p>
                  <Card.Link href="https://www.linkedin.com/in/elena-garilis-0431a0249/">
                    <Button size="sm" variant="success">
                      LinkedIn
                    </Button>{" "}
                  </Card.Link>
                  <Card.Link href="https://react-portfolio-seven-xi.vercel.app/skills">
                    <Button size="sm" variant="info">
                      Portfolio
                    </Button>{" "}
                  </Card.Link>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <strong> ZHUO YANG - Back End Mentor</strong>
                </Accordion.Header>
                <Accordion.Body>
                  {" "}
                  <p>
                    I'm a full stack developer with a passion to learn new
                    knowledge and meet new challenges, currently looking for a
                    back-end developer position or full-stack position.
                  </p>
                  <p>I love helping people learn REACT and programming</p>
                  <Card.Link href="https://www.linkedin.com/in/zhuo-yang-3881869b/">
                    <Button size="sm" variant="success">
                      LinkedIn
                    </Button>{" "}
                  </Card.Link>
                  <Card.Link href="https://github.com/hudir">
                    <Button size="sm" variant="info">
                      GitHub
                    </Button>{" "}
                  </Card.Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

          <Col>
            <ListGroup>
              <ListGroup.Item>
                {" "}
                <strong>WEB TECHNOLOGIES WE HAVE LEARNED</strong>{" "}
              </ListGroup.Item>
              <ListGroup.Item variant="primary">
                CSS: Cascading Style Sheets
              </ListGroup.Item>
              <ListGroup.Item variant="secondary">
                BOOTSTRAP: Front-End Framework{" "}
              </ListGroup.Item>
              <ListGroup.Item variant="success">
                REACT: Free JavaScript Library{" "}
              </ListGroup.Item>
              <ListGroup.Item variant="danger">
                MONGODB: Nonrelational Database Management System
              </ListGroup.Item>
              <ListGroup.Item variant="warning">
                JAVASCRIPT: Just-In-Time Compiled Programming Language
              </ListGroup.Item>
              <ListGroup.Item variant="info">
                NODEJS: Run JavaScript Everywhere
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col>
            {/* style={{ width: "26rem" }} */}
            <Card border="warning">
              <Card.Header>
                {" "}
                <strong>DCI - Digital Career Institute</strong>
              </Card.Header>
              <Card.Body>
                <Card.Title>Our Digital Career Starts Here</Card.Title>
                <Card.Text>
                  {" "}
                  <p>
                    The DCI was founded in 2016. Today, the DCI supports
                    everyone interested in pursuing a digital career.
                  </p>
                  <p>
                    The DCI is represented at various locations throughout
                    Germany with more than 200 employees.
                  </p>
                  Over 4,000 students from 128 countries have been trained
                  through DCI courses.
                </Card.Text>

                <Card.Link href="https://digitalcareerinstitute.org/de/">
                  <Button size="sm" variant="outline-info">
                    WebPage
                  </Button>{" "}
                </Card.Link>
                <Card.Link href="https://www.facebook.com/digitalcareerinstitute/">
                  <Button size="sm" variant="outline-success">
                    FaceBook
                  </Button>{" "}
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
