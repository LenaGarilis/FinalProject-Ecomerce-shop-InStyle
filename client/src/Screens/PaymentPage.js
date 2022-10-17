import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerPaymentMethod } from "../features/paymentReducer";
import { Form, Button, Container } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";

const PaymentScreen = () => {
  const [checkOutPayment, setCheckOutPayment] = useState("PayPal");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const shipping = useSelector((state) => state.shipping);

  const { Shipping } = shipping;

  if (!Shipping) {
    navigate("/shipping");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerPaymentMethod(checkOutPayment));
    navigate("/placeorder");
  };

  return (
    <Container>
      <div className="py-3">
        <FormContainer>
          <CheckoutSteps step1 step2 step3 />
          <Container style={{ textAlign: "left" }}>
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
              <Form.Label>Select Method</Form.Label>

              <Form.Check
                style={{ margin: "10px auto" }}
                type="radio"
                label="PayPal or Credit Card"
                id="PayPal"
                name="paymentMethod"
                value="PayPal"
                checked
                onChange={(e) => setCheckOutPayment(e.target.value)}
              ></Form.Check>
              <Form.Check
                style={{ margin: "10px auto" }}
                type="radio"
                label="Stripe"
                id="Stripe"
                name="paymentMethod"
                value="Stripe"
                onChange={(e) => setCheckOutPayment(e.target.value)}
              ></Form.Check>

              <div className="d-grid gap-2 mt-2">
                <Button type="submit" variant="primary" onClick={submitHandler}>
                  Continue
                </Button>
              </div>
            </Form>
          </Container>
        </FormContainer>
      </div>
    </Container>
  );
};

export default PaymentScreen;
