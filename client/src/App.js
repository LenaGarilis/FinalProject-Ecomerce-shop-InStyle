import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
//import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <h1>Wellcome</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
