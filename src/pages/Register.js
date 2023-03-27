import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="auth">
      <div className="auth__card">
        <h3 className="auth__card-title">Register</h3>

        <form action="">
          <div className="auth__card-form-input">
            <label for="username">Username</label>
            <input type="text" placeholder="Enter your username address" />
          </div>
          <div className="auth__card-form-input">
            <label for="email">Email</label>
            <input type="email" placeholder="Enter your email address" />
          </div>
          <div className="auth__card-form-input">
            <label for="password">Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="auth__card-buttons register">
            <Link to='/login' className="auth__card-login">Login</Link>
            <a href="register" className="auth__card-register">Register</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register