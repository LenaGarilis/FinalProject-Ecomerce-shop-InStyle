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
// import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Sonnet from "../components/Sonnet2";
import Sonnet2 from "../components/Sonnet";
import Sonnet3 from "../components/Sonnet3";
import Buyme from "../components/BuymeCard/Buyme";
import Pagination from "react-bootstrap/Pagination";

let active = "";
let items = [];
for (let number = 35; number <= 39; number++) {
  items.push(
    <Pagination.Item
      // className="bg-size rounded "
      key={number}
      active={number === active}
    >
      {number}
    </Pagination.Item>
  );
}

const paginationBasic = (
  <div>
    <Pagination>{items}</Pagination>
  </div>
);

// render(paginationBasic);

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
    <main className="main-container">
      <Container>
        <div className="pt-3">
          {isLoading ? (
            <Loader />
          ) : isError ? (
            <Message>{message}</Message>
          ) : (
            <Row>
              <Col md={6}>
                <Image
                  className="rounded"
                  src={product.image}
                  alt={product.name}
                  fluid
                />
              </Col>
              <Col md={3}>
                <ListGroup className="rounded" variant="flush">
                  <ListGroupItem className="bg-size">
                    <h1>{product.name}</h1>
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
                    <ListGroupItem className="bg-size">
                      <Row>
                        <Col className="bg-size-font">{paginationBasic}</Col>
                      </Row>
                    </ListGroupItem>

                    {product.countInStock > 0 && (
                      <ListGroupItem>
                        <Row>
                          <Col>Quantity:</Col>
                          <Col>
                            <Form.Control
                              as="select"
                              size="sm"
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
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className=" mb-1  py-3 "
          >
            <Tab eventKey="home" title="About This Product">
              <Sonnet />
            </Tab>
            <Tab eventKey="profile" title="About This Shop">
              <Sonnet2 />
            </Tab>
            <Tab eventKey="contact" title="Special Offer">
              <Sonnet3 />
            </Tab>
          </Tabs>
        </div>
      </Container>
      <Buyme />
    </main>
  );
}

export default ProductScreen;
