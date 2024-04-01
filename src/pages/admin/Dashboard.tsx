import React from 'react'
import { Link } from 'react-router-dom'
import { TProduct } from '~/interfaces/product';
// import { Link } from 'react-router-dom';
type Props = {
    products: TProduct[];
  };
const Dashboard = ({ products }:Props ) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link className="btn btn-primary" to="/admin/add">
        Add new product
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Thumbnail</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <img width={60} src={item.thumbnail} alt={item.title} />
              </td>
              <td>{item.description}</td>
              <td>
                <Link to={`/admin/edit/${item.id}`}>
                <button className="btn btn-warning">Edit</button>
                </Link>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
