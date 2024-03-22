import React from "react";
import { Link } from "react-router-dom";
import instance from "~/apis";
import {TProduct} from"~/interfaces/product";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";




type TProps = {
  products: TProduct[];
};
const ProductList = (props: TProps) => {
  // Get the products from the server

  return (
    <div className="home-container">
      <div className="banner">
        <h3>Banner</h3>
      </div>
      <h4>Sản Phẩm Nổi bật</h4>
      <div className="product-grid">
        {props.products.map((product) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item" key={product.id}>
            <img width={200} height={200} src={product.images?.[0]} alt="Product 1" />
            <h3>{product.title}</h3>
            <p>Thông tin sản phẩm</p>
            <div className="rating">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <div className="quantity">
              <span>Số lượng: {product.stock}</span>
            </div>
            <p>{product.price}.000 VND</p>
            <NavLink to={`/DetailProduct/${product.id}`}>chi tiết sản phẩm</NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList; 