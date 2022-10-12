import React from "react";

import { Button, Card, Container } from "react-bootstrap";

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
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default Offer;
