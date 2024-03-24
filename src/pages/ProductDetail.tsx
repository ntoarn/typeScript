import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "~/apis";
import { TProduct } from "~/interfaces/product";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

type Props = {};

const ProductDetail = (props: Props) => {
  const { id } = useParams();
  const [product, setProduct] = useState<TProduct>({
    title: "",
    price: 0,
    description: "",
  });
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await instance.get(`/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [id]);
  return (
    // <div>
    //   <h1>Chi tiet san pham</h1>
    //   <div>
    //     <h2>{product.title}</h2>
    //     <p>Gia: {product.price}</p>
    //     <p>{product.description}</p>
        // <img src={product.thumbnail} alt={product.title} />
    //   </div>
    // </div>
    <>
      <Container>
      <Row>
        <Col md={6}>
        <img src={product.thumbnail} alt={product.title} />
        </Col>
        <Col md={6}>
          <h2>{product.title  }</h2>
          {/* <p>{product.description}</p> */}
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <Button variant="primary">Add to Cart</Button>
        </Col>
      </Row>
    </Container>
    </>
);
};
export default ProductDetail;