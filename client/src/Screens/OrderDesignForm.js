import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container, Image, Row, Col } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

function OrderDesignForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const userProfile = useSelector((state) => state.userProfile);
  const { user } = userProfile;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      setName(user.name);
      setEmail(user.email);
    }
  }, [dispatch, navigate, userInfo, user.name, user]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        text,
        image,
      };

      setBool(true);

      //let formData = new FormData();
      // for (let key in data) {
      //   formData.append(key, data[key]);
      // }
      // console.log(formData);

      // const data = new FormData();
      // data.append("name", name);
      // data.append("email", email);
      // data.append("text", text);
      // data.append("image", image);

      const res = await axios.post(
        `http://localhost:5005/api/contact`,
        data
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
      );
      if (name.length === 0 || email.length === 0 || text.lenght === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setText("");
      }
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
    //console.log(data);
  };
  console.log(text);

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
                  <p className="text-center banner">{banner}</p>
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
                    <div>
                      <h5 className="button">Send</h5>
                      {bool ? (
                        <b className="load">
                          <img
                            src="images/load2.gif"
                            alt="image not responding"
                          />
                        </b>
                      ) : (
                        ""
                      )}
                    </div>
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
