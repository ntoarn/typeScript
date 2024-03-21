import React from "react";

import {TProduct} from"~/interfaces/product";


type TProps = {
  products: TProduct[];
};
const ProductList = (props: TProps) => {
  console.log(props.products);
  // Get the products from the server

  return (
    <div>
      <h1>Danh sach san pham</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.discountPercentage && "Dang cap nhat"}</p>
          <p>{product.rating}</p>
          <p>{product.stock}</p>
          <p>{product.brand}</p>
          <p>{product.category}</p>
          <img width={300} src={product.thumbnail} alt={product.title} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;