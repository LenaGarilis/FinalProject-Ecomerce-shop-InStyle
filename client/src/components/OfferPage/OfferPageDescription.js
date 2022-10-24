import React from "react";
import { Button, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function OfferPageDescription() {
  return (
    <div>
      <Container>
        <div className="py-3" id="offer">
          <Card>
            <Card.Body>
              <Card.Header className="text-center">
                <h3>BE THE DESIGNER OF YOUR OWN SHOES</h3>
              </Card.Header>

              <div className="row">
                <div className="col-xs-12 col-md-6 text-center pt-2">
                  <img
                    src="images/ind_design.jpg"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <div className="col-xs-12 col-md-6 py-3">
                  <Card.Text className="py-2 ">
                    We can make your ideas come true, so you get unique model of
                    the slippers. Discuss with us your ideas, set agreement upon
                    the final version, choose the materials, print, add
                    embroidery (for example your initials or company logo).
                  </Card.Text>
                  <Card.Text>
                    Your order will be ready in 5-7 working days
                  </Card.Text>

                  <Card.Title className="py-2">Pay attention!</Card.Title>

                  <Card.Text>
                    Shoes purchased under individual tailoring accordingly to
                    personal measurements or original design, are not subject to
                    exchange and return. Therefore, we ask you to be more
                    careful and responsible in choosing the size.
                  </Card.Text>
                  <div className="offer-buttons">
                    <Link to="/choose-design">
                      <Button type="button">Submit your design</Button>
                    </Link>
                    <Link to="/">
                      <Button type="button">Shop readymade shoes</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default OfferPageDescription;
