import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/user/UserLoginSlice";
import { clearOrder } from "../features/order/orderReducer";
import { clearCartItems } from "../features/cart/cartReducer";
import { clearUserDetail } from "../features/user/UserDetailSlice";
import CartHeader from "./CartHeader";
// import SearchBox from "./SearchBox";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    dispatch(clearUserDetail());
    dispatch(clearOrder());
    dispatch(clearCartItems());
    navigate("/");
  };

  return (
    <header className="sticky-top">
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="h3-color">
              <h4>BEARS 💛 HONEY</h4>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-na" className="justify-content-end">
            <Nav className="ms-auto">
              <Nav.Item>
                {" "}
                <Nav.Link href="/cart">
                  <CartHeader />
                </Nav.Link>
              </Nav.Item>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>My Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/myorders">
                    <NavDropdown.Item>My Orders</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fa-solid fa-arrow-right-to-bracket "></i> Sign
                    in
                  </Nav.Link>
                </LinkContainer>
              )}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
