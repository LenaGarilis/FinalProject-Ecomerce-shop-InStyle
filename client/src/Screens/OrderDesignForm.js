import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container, Image, Row, Col } from "react-bootstrap";
import {
  getUserProfile,
  clearUserDetail,
} from "../features/user/UserDetailSlice.js";
import {
  updateUserProfileReset,
  updateUserProfile,
} from "../features/user/UpdateUserDetails.js";

function OrderDesignForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [err, setErr] = useState("");

  const userProfile = useSelector((state) => state.userProfile);
  const { error, user } = userProfile;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      setName(user.name);
      setEmail(user.email);
      setText(user.text);
    }
  }, [dispatch, navigate, userInfo, user.name, user]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Container>
        <div className="py-3">
          <Row className="justify-content-center">
            <Col md={8}>
              <h3 className="text-center">
                Tell us more about your ideas for individual shoes's design
              </h3>
              <Form
                onSubmit={submitHandler}
                style={{ textAlign: "left", fontWeight: "900" }}
              >
                <Form.Group controlId="name" className="mb-2">
                  <Form.Label>What is your name?</Form.Label>
                  <Form.Control
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="email" className="mb-2">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Describe your ideas</Form.Label>
                  <Form.Control
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>

                <Form.Group controlId="email" className="mb-2">
                  <Form.Label className="me-2">Download image: </Form.Label>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </Form.Group>

                <div>
                  {image && (
                    <img
                      src={URL.createObjectURL(image)}
                      alt={image.name}
                      className="img-fluid rounded-start"
                    />
                  )}
                </div>

                <div className="d-grid gap-2 mt-2">
                  <Button type="submit" variant="primary">
                    Send
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default OrderDesignForm;
