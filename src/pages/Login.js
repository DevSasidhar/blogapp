import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className="auth">
      <div className="auth__card">
        <h3 className="auth__card-title">Login</h3>

        <form action="">
          <div className="auth__card-form-input">
            <label for="email">Email</label>
            <input type="email" placeholder="Enter your email address" />
          </div>
          <div className="auth__card-form-input">
            <label for="password">Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="auth__card-buttons">
            <button className="auth__card-login">Login</button>
            <Link to='/register' className="auth__card-register">
                Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login