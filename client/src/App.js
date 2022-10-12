import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./Screens/MainPage";
import ProductScreen from "./Screens/ProductPage";
import CartScreen from "./Screens/CartPage";
import LoginScreen from "./Screens/LoginPage";
import RegisterScreen from "./Screens/RegisterPage";
import ProfileScreen from "./Screens/ProfilePage";
import ShippingScreen from "./Screens/ShippingPage";

const App = () => {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login/shipping" element={<ShippingScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart/:id" element={<CartScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
