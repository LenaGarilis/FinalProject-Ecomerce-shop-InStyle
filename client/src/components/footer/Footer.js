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
            Professors, assistants and students work together in an atmosphere
            of mutual trust and respect. The contribution of each individual
            contributes to the success of the institution as a whole.
          </p>
        </Alert>
      </div>
      <Container className="  py-3 pd-3 ">
        <Row>
          <Col>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <strong> ELENA GARILIS - Full Stack Developer</strong>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <strong> KORNELI NASTAS - Frond End Developer</strong>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <strong> ZHUO YANG - Back End Developer</strong>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
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
            <Card border="warning" style={{ width: "26rem" }}>
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