import React from 'react'
import { TProduct } from '~/interfaces/product';
type Props = { product: TProduct};

const Product = (props: Props) => {
  return (
    <div>
      <h1>{props.product.title}</h1>
      <img src={props.product.thumbnail} alt={props.product.title} />
      <p>{props.product.price}</p>
      <p>{props.product.description}</p>
    </div>
  )
}

export default Product
