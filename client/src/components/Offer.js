import React from "react";

import { Button, Card, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Offer = () => {
  return (
    <div>
      <Container className="offer-section">
        <Card className="text-center">
          <Card.Header>Special offer</Card.Header>
          <Card.Body>
            <Card.Title>Be the designer of your own shoes</Card.Title>
            <Card.Text>
              We can make your ideas come true, so you get unique model of the
              slippers. Discuss with our designer your ideas, set agreement on
              final version, discuss the materials, print, add embroidery (for
              example your initials or company logo).
            </Card.Text>
            <NavLink to="/offer">
              <Button variant="primary">Choose Design</Button>
            </NavLink>
          </Card.Body>
          <Card.Footer className="text-muted">
            Your order will be ready within 7 days
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default Offer;
