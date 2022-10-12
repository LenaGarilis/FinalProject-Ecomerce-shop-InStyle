import React from "react";

import { Button, Card, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Offer = () => {
  return (
    <div>
      <Container className="offer-section">
        <Card className="text-center">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <NavLink to="/offer">
              <Button variant="primary">Choose Design</Button>
            </NavLink>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default Offer;
