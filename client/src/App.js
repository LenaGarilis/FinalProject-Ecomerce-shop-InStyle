import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
//import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<MainPage />} exact />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
