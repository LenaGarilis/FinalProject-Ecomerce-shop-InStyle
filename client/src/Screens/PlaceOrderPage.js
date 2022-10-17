import React, { useEffect } from "react";
import {
  Alert,
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Container,
} from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";
import { createOrder } from "../features/order/orderReducer";
import {
  getOrderDetails,
  ORDER_DETAILS_RESET,
} from "../features/order/orderDetailReducer.js";
import { removeFromCart } from "../features/cart/cartSlice";
import { USER_DETAILS_RESET } from "../features/user/UserDetailSlice";

const PlaceOrderScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const shipping = useSelector((state) => state.shipping);
  const { Shipping } = shipping;

  const payment = useSelector((state) => state.payment);
  const { Payment } = payment;
  const confirmedOrder = useSelector((state) => state.createdOrder);
  const { order } = confirmedOrder;

  const itemsPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const shippingPrice = itemsPrice > 100 ? 100 : 0;
  const taxPrice = (itemsPrice * 0.15).toFixed(2);

  const totalPrice = (
    Number(itemsPrice) +
    Number(shippingPrice) +
    Number(taxPrice)
  ).toFixed(2);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: Shipping,
        paymentMethod: payment.Payment,
        itemsPrice: itemsPrice,
        shippingPrice: shippingPrice,
        taxPrice: taxPrice,
        totalPrice: totalPrice,
      })
    );
  };
  useEffect(() => {
    dispatch(USER_DETAILS_RESET());
    dispatch(ORDER_DETAILS_RESET());

    dispatch(getOrderDetails(order._id));
  }, [dispatch, order._id, confirmedOrder.status]);

  const goToPayment = () => {
    navigate(`/viewOrder/${order._id}`);
  };

  return (
    <>
      <Container style={{ textAlign: "left" }}>
        <div className="py-3">
          {" "}
          <CheckoutSteps step1 step2 step3 step4 />
          {confirmedOrder.status === "SUCCESS" && (
            <Alert variant="info">Order create success</Alert>
          )}
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>Shipping</h3>
                  <p>
                    {`${Shipping.address}, ${Shipping.postalCode}, ${Shipping.city},
                    ${Shipping.country}`}
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h3>Payment Method</h3>
                  <div style={{ fontWeight: 900 }}> {Payment}</div>
                </ListGroup.Item>

                <ListGroup.Item>
                  <h3>Order Items</h3>
                  {cart.cartItems.length === 0 && (
                    <Message>Your cart is Empty</Message>
                  )}

                  <ListGroup variant="flush">
                    {cart.cartItems.map((product) => (
                      <ListGroup.Item key={product._id}>
                        <Row>
                          <Col md={2}>
                            <Image
                              src={product.image}
                              alt={product.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col md={4}>
                            <Link to={`/product/${product._id}`}>
                              <div style={{ fontWeight: 900 }}>
                                {product.name}
                              </div>
                            </Link>
                          </Col>
                          <Col>
                            {product.qty} x €{product.price} = €
                            {product.qty * product.price}
                          </Col>
                          {/* <Col>
                            <Button variant="light" type="button"></Button>
                          </Col> */}
                          {confirmedOrder.status !== "SUCCESS" && (
                            <Col>
                              <Button
                                variant="light"
                                type="button"
                                onClick={() =>
                                  removeFromCartHandler(product._id)
                                }
                              >
                                <i className="fas fa-trash"></i>
                              </Button>
                            </Col>
                          )}
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>Order Summary</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Items</Col>
                      <Col>€{itemsPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Shipping</Col>
                      <Col>€{shippingPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Tax</Col>
                      <Col>€{taxPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Total</Col>
                      <Col>€{totalPrice}</Col>
                    </Row>
                  </ListGroup.Item>

                  <div className="d-grid gap-2 py-2 px-1">
                    <Button
                      type="button"
                      variant="primary"
                      className="btn-block"
                      onClick={placeOrderHandler}
                      disabled={
                        cart.cartItems.length === 0 ||
                        confirmedOrder.status === "SUCCESS"
                      }
                    >
                      Place Order
                    </Button>
                  </div>
                  {confirmedOrder.status === "SUCCESS" && (
                    <div className="d-grid py-2 gap-2 px-1">
                      <Button
                        type="button"
                        variant="primary"
                        className="btn-block"
                        onClick={goToPayment}
                      >
                        Order payment
                      </Button>
                    </div>
                  )}
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default PlaceOrderScreen;
