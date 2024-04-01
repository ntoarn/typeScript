import React from 'react'

const Register = () => {
  return (
    <div>
        <h1>Register </h1>
        <form action="" method="post">
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Enter name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" className="form-control" placeholder="Confirm password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Register
