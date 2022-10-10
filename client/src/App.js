import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./pages/MainPage";
import ProductScreen from "./pages/ProductPage";
import CartScreen from "./pages/CartPage";
import LoginScreen from "./pages/LoginPage";
import RegisterScreen from "./pages/RegisterPage";
import ProfileScreen from "./pages/ProfilePage";
import ShippingScreen from "./pages/ShippingPage";

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
