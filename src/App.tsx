import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <div className="app">
        <Header />
        {/* banner */}
        {/* Danh sach san pham */}
        <Home />
        <Footer />
      </div>
    </>
  );

}

export default App;