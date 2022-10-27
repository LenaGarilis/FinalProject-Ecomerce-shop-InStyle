import React from "react";
import blousesdata from "./blousesdata.js";
import "./blouses.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Blouses(props) {
  return (
    <Container className="pb-3">
      {/* <div id="portfolio" className="text-center"> */}
      <div className="section-title">
        <p className=" text-center">
          Beautiful blouses by Russian designer Roma Uvarov will appear in our
          store very soon, if you want to receive a message about their
          availability, please{" "}
          <Alert.Link href="http://localhost:3000/register?redirect=/">
            register
          </Alert.Link>{" "}
          on the site. We will send you a notification by email. Thanks!!!
        </p>
      </div>

      {/* <Row>
        {blousesdata.map(
          ({ id, title, price, name, smallImage, largeImage }) => (
            <Col
              key={id}
              sm={12}
              md={6}
              lg={4}
              xl={3}
              className="portfolio-item "
            >
              <a href={largeImage} data-lightbox-gallery="gallery1">
                <Card className="my-3 p-3 rounded hover-bg">
                  <div className="hover-text">
                    <h4>{title}</h4>
                  </div>
                  <Card.Img src={smallImage} variant="top" />

                  <Card.Body>
                    <Card.Title as="div">
                      <strong>{name}</strong>
                    </Card.Title>
                    <Card.Text as="h3">€{price}</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          )
        )}
      </Row> */}
      <div className="row">
        <div className="portfolio-items ">
          {blousesdata.map(
            ({ id, title, name, price, smallImage, largeImage }) => (
              <div key={id} className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href={largeImage}
                    title={title}
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h2 className="font-logo1"> {title}</h2>
                      <h2 className="font-logo1">{name}</h2>
                      <h2 className="font-logo1">€{price}</h2>
                    </div>
                    <img
                      src={smallImage}
                      className="img-responsive"
                      alt={title}
                    />
                    {/* <div>{name}</div>
                    <div>€{price}</div> */}
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </Container>
  );
}

export default Blouses;
