import React from "react";

import { Button, Card, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Offer = () => {
  return (
    <div className=" md-3 ">
      <Card>
        <Card.Header className="font-logo1">
          <strong>
            {" "}
            <h5> BEARS 💛 HONEY </h5>{" "}
          </strong>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            Shoes made by hand in St. Petersburg from the best Italian
            materials!
          </Card.Title>
          <Container className="offer-section">
            <Card className="text-center">
              <Card.Header>Special offer</Card.Header>
              <Card.Body>
                <Card.Title>Be the designer of your own shoes</Card.Title>
                <Card.Text>
                  We can make your ideas come true, so you get unique model of
                  the slippers. Discuss with our designer your ideas, set
                  agreement on final version, discuss the materials, print, add
                  embroidery (for example your initials or company logo).
                </Card.Text>
                <NavLink to="/offer">
                  <Button variant="primary">Choose Design</Button>
                </NavLink>
              </Card.Body>
              <Card.Footer className="text-muted">
                Final version of the design will be ready within 7 days
              </Card.Footer>
            </Card>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Offer;
