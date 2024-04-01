import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Notfound from "./pages/Notfound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import instance from "./apis";
import { TProduct } from "./interfaces/product";
import Dashboard from "./pages/admin/Dashboard";
import ProductAdd from './pages/admin/ProductAdd';
import ProductEdit from "./pages/admin/ProductEdit";
import { createProduct, getProducts, updateProduct } from "./apis/product";


function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<TProduct[]>([]);
  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data);
    })();
  }, []);

  const handleAddProduct = (data: TProduct) => {
    (async () => {
      const newProduct = await createProduct(data);
      setProducts([...products, newProduct]);
      navigate("/admin");
    })();
  };

  const handleEditProduct = (data: TProduct) => {
    (async () => {
      const product = await updateProduct(data);
      setProducts(
        products.map((item) => (item.id === product.id ? product : item))
      );
      navigate("/admin");
    })();
  };
  return (
    <>
      <div className="app">
        <Header />
        <main className="container" id="main">
          <Routes>
            {/* Client */}
            <Route path="/">
              <Route index element={<Home products={products} />} />
              <Route path="/shop/:id" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            {/* Admin */}
            <Route path="/admin">
              <Route index element={<Dashboard products={products} />} />
              <Route
                path="/admin/add"
                element={<ProductAdd onAdd={handleAddProduct} />}
              />
              <Route
                path="/admin/edit/:id"
                element={<ProductEdit onEdit={handleEditProduct} />}
              />
            </Route>

            <Route path="*" element={<Notfound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;