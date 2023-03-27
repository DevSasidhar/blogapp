import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({auth}) => {
  return (
    
    auth ? <header className="header">
    <nav className="nav container">
      <a href="index.html" className="nav__logo">Blogs<span>.</span></a>

      <div className="nav__auth" id="nav-auth">
        <Link to='/write' className="nav__auth-write"
          ><i className="bx bx-edit"></i> Write</Link>
        <spans className="nav__auth-username">John Doe</spans>
        <a href="#logout" className="button nav__auth-logout">Logout</a>
      </div>

      <div className="nav__toggle" id="nav-toggle">
        <i className="bx bx-menu"></i>
      </div>
    </nav>
  </header> :

    <header className="header">
      <nav className="nav container">
        <Link to='/' className="nav__logo">BUILD A BLOG<span>.</span></Link>

        <div className="nav__auth" id="nav-auth">
          <Link to='/login' className="nav__auth-login">Login</Link>
          <Link to='/register' className="button nav__auth-register">Register</Link>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header