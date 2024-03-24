import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";


function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          {/* <Route path="/shop" element={<Shop />} /> */}
          <Route path="/shop/:id" element={<ProductDetail />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Notfound />} /> */}
        </Routes>

        <Footer />
      </div>
    </>
  );

}

export default App;