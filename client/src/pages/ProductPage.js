import React, { useState, useRef, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Row,
  Form,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Container,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { productDetails } from "../features/productDetails/productDetailsSlice";
import { addToCart, addQty } from "../features/cart/cartSlice";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";

function ProductScreen() {
  const { product, isLoading, isError, message } = useSelector(
    (state) => state.productDetails
  );

  const [qty, setQty] = useState(1);

  const { id } = useParams();
  const effectRan = useRef(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (effectRan.current === false) {
      dispatch(productDetails(id));

      return () => {
        effectRan.current = true;
      };
    }
  }, [id, dispatch]);

  const addToCartHandler = () => {
    // localStorage.setItem('qty', JSON.stringify(qty))

    dispatch(addToCart({ ...product, qty }));
    // dispatch(addQty(qty))
    navigate(`/cart/${id}?qty=${qty}`);
    // navigate(`/cart`)
  };

  return (
    <>
      <Container>
        <div className="pt-3">
          <Link className="btn btn-light my-3" to="/">
            Go Back
          </Link>
          {isLoading ? (
            <Loader />
          ) : isError ? (
            <Message>{message}</Message>
          ) : (
            <Row>
              <Col md={6}>
                <Image src={product.image} alt={product.name} fluid />
              </Col>
              <Col md={3}>
                <ListGroup variant="flush">
                  <ListGroupItem>
                    <h3>{product.name}</h3>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} reviews`}
                    />
                  </ListGroupItem>
                  <ListGroupItem>Price: ${product.price}</ListGroupItem>
                  <ListGroupItem>
                    Description: {product.description}
                  </ListGroupItem>
                </ListGroup>
              </Col>
              <Col md={3}>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroupItem>
                      <Row>
                        <Col>Price:</Col>
                        <Col>
                          <strong>€{product.price}</strong>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col>Status:</Col>
                        <Col>
                          <strong>
                            {product.countInStock > 0
                              ? "In Stock"
                              : "Out Of Stock"}
                          </strong>
                        </Col>
                      </Row>
                    </ListGroupItem>

                    {product.countInStock > 0 && (
                      <ListGroupItem>
                        <Row>
                          <Col>Qty</Col>
                          <Col>
                            <Form.Control
                              as="select"
                              value={qty}
                              onChange={(e) => setQty(Number(e.target.value))}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </Form.Control>
                          </Col>
                        </Row>
                      </ListGroupItem>
                    )}

                    <ListGroupItem>
                      <Button
                        onClick={addToCartHandler}
                        className="btn-block"
                        type="button"
                        disabled={product.countInStock === 0}
                      >
                        Add To Cart
                      </Button>
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          )}
        </div>
      </Container>
    </>
  );
}

export default ProductScreen;
