import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import HomeScreen from "./Screens/MainPage";
import ProductScreen from "./Screens/ProductPage";
import CartScreen from "./Screens/CartPage";
import LoginScreen from "./Screens/LoginPage";
import RegisterScreen from "./Screens/RegisterPage";
import ProfileScreen from "./Screens/ProfilePage";
import ShippingScreen from "./Screens/ShippingPage";
import PaymentScreen from "./Screens/PaymentPage";
import OfferPage from "./Screens/OfferPage";
import PlaceOrderScreen from "./Screens/PlaceOrderPage";
import OrderDesignForm from "./Screens/OrderDesignForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <Header />

      <main>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login/shipping" element={<ShippingScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart/:id" element={<CartScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/offer" element={<OfferPage />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/placeorder" element={<PlaceOrderScreen />} />
          <Route path="/choose-design" element={<OrderDesignForm />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
