import React from "react";
import { Button, Container, Card, CardGroup, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function OfferOrderSteps() {
  return (
    <div>
      <Container>
        <div className="py-3" id="offer">
          <Card>
            <Card.Header className="text-center">
              <h3>Custom Design Your Own Sneakers - Only $49.95</h3>
            </Card.Header>

            <CardGroup>
              <Card border="light">
                <Card.Body className="step-card-first">
                  <Card.Title className="text-center pb-2">
                    <i class="fa-sharp fa-solid fa-1 fa-2x"></i>
                  </Card.Title>

                  <Card.Title className="text-center">
                    SUBMIT YOUR DESIGN
                  </Card.Title>

                  <Card.Text>
                    Fill out our custom design
                    <a className="px-1" href="/choose-design">
                      request form
                    </a>
                    , where you'll tell our team exactly what you want on your
                    sneakers. Attach an art file or explain the elements of the
                    design in the form
                  </Card.Text>

                  <Card.Title className="text-center pt-2">
                    <i
                      className="text-center"
                      class="fa-solid fa-file-pen fa-3x"
                    ></i>
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card bg="light">
                <Card.Body>
                  <Card.Title className="text-center pb-2">
                    <i class="fa-solid fa-2 fa-2x"></i>
                  </Card.Title>

                  <Card.Title className="text-center">
                    REVIEW YOUR PROOF BY EMAIL
                  </Card.Title>

                  <Card.Text>
                    Within 5 days of your request submission, you will receive
                    an email with a link to preview your custom shoes. If you
                    approve the design, you can add the sneakers to your cart
                    and check out. Need changes? All you have to do is reply
                    back with your requested changes and we'll send you a new
                    proof!
                  </Card.Text>

                  <Card.Title className="text-center pt-2">
                    <i class="fa-solid fa-envelope-circle-check fa-3x"></i>
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body className="step-card-third">
                  <Card.Title className="text-center pb-2">
                    <i class="fa-solid fa-3 fa-2x"></i>
                  </Card.Title>

                  <Card.Title className="text-center">
                    PLACE YOUR ORDER
                  </Card.Title>

                  <Card.Text>
                    Once you approve and place your order, your custom printed
                    shoes will go into production, and final shipment to you
                    takes about as the delivery of readymade shoes 3-5 days!
                  </Card.Text>

                  <Card.Title className="text-center pt-2">
                    <Card.Title className="text-center pt-2">
                      <i class="fa-solid fa-shoe-prints fa-3x"></i>
                    </Card.Title>
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>

            <Link className="text-center py-3" to="/choose-design">
              <Button type="button" variant="warning">
                Submit your design
              </Button>
            </Link>
          </Card>
        </div>

        <Card className="mb-3">
          <Card.Header className="text-center">
            <h3>Put your best foot forward in</h3>
            <p>Custom designed shoes</p>
          </Card.Header>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/offer-carousel/slide1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/offer-carousel/slide2.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/offer-carousel/slide3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <Link className="text-center py-3" to="/choose-design">
            <Button type="button" variant="warning">
              Create your shoes now
            </Button>
          </Link>
        </Card>
      </Container>
    </div>
  );
}

export default OfferOrderSteps;
