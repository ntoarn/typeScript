import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>login</h1>
      <form action="" method="post">
        <input type="text" name="username" placeholder="username" /> <br />
        <input type="password" name="password" placeholder="password" /> <br />
        <input type="submit" value="login" />
      </form>
    </div>
  )
}

export default Login
