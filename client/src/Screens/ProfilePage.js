import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Container, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import {
  getUserProfile,
  clearUserDetail,
} from "../features/user/UserDetailSlice.js";
import {
  updateUserProfileReset,
  updateUserProfile,
} from "../features/user/UpdateUserDetails.js";
import { logout } from "../features/user/UserLoginSlice";

const Profile = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [err, setErr] = useState("");

  const dispatch = useDispatch();

  const userProfile = useSelector((state) => state.userProfile);
  const { error, user } = userProfile;

  const updatedUserProfile = useSelector((state) => state.updateUserProfile);
  const { status } = updatedUserProfile;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo || status === "UPDATE_USER_PROFILE_SUCCESS") {
      dispatch(logout());
      dispatch(clearUserDetail());
      navigate("/login");
    } else if (!user || !user.name) {
      dispatch(updateUserProfileReset());
      dispatch(getUserProfile("profile"));
    } else {
      setName(user.name);
      setEmail(user.email);
    }
  }, [dispatch, navigate, userInfo, user.name, user, status]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErr("Password must match");
      setMessage("");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
      setMessage("Profile updated");
      setErr("");
    }
  };

  return (
    <div>
      <Container>
        <div className="py-3">
          <Row className="justify-content-center">
            <Col md={8}>
              <Alert variant="danger">Profile update will cause logout</Alert>
              {message && message.length > 0 ? (
                <Message variant="success">{message}</Message>
              ) : (
                ""
              )}

              {err && err.length > 0 ? (
                <Message variant="danger">{err}</Message>
              ) : (
                ""
              )}

              {error && <Message variant="danger">{error}</Message>}

              <h3 className="text-center">My Profile</h3>
              <Form
                onSubmit={submitHandler}
                style={{ textAlign: "left", fontWeight: "900" }}
              >
                <Form.Group controlId="name" className="mb-2">
                  <Form.Label>Name</Form.Label>
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
                <Form.Group id="password" className="mb-2">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="confirmPassword" className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <div className="d-grid gap-2 mt-2">
                  <Button type="submit" variant="primary">
                    Update
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Profile;
