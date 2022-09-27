import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./Pages/MainPage";
//import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <MainPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
