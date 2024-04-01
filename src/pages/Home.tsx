// import axios from "axios";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import instance from "~/apis";
// import ProductList from "~/components/ProductsList";
import { TProduct } from "~/interfaces/product";
type Props = { products: TProduct[] };
const Home = ({ products }: Props) => {


  /**
   * ! Dependency với 3 trường hợp:
   * ? undefined: không có dependency - re-render khi state được cập nhật.
   * ? []: empty array - chỉ re-render khi componentDidMount.
   * ? [state1, state2,...]: re-render khi một trong số các state được cập nhật.
   */

  return (
    <>
    <h1>Danh sach san pham</h1>
      <div className="row gx-5">
        {products.map((product) => (
          <div className="col col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div key={product.id} className="product-card">
              <Link to={`/shop/${product.id}`}>
                <img width={300} src={product.thumbnail} alt={product.title} />
              </Link>
              <div className="product-content">
                <Link to={`/shop/${product.id}`}>
                  <h2>{product.title}</h2>
                </Link>
                <p>{product.price}</p>
                <p>{product.brand}</p>
                <p>{product.category}</p>
                <button className="btn btn-primary">Add to card</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
};

export default Home;