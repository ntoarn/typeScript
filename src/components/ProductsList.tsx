import { Link } from "react-router-dom";
import instance from "~/apis";
import {TProduct} from"~/interfaces/product";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";





const ProductList = () => {
  const [product, setProducts] = useState<TProduct[]>([])
 useEffect(() =>{
  const getAllProducts = async () =>{
    try {
      const { data } = await instance.get(`/products?_limit=9`);
      setProducts(data)
    } catch (error) {
      console.log(error);
      
    }
  }
  getAllProducts();
 }, [])
  return (
    <div className="home-container">
      <div className="banner">
      </div>
      <h4>Sản Phẩm Nổi bật</h4>
      <div className="row">
        {product.map((product)=>(
         <div className="col-4">
          <ProductItem product={product}/>
         </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList; 