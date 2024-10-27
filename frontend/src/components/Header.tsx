import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // User icon import
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>The Moon</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/rooms">Rooms</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="auth-container">
        <FontAwesomeIcon icon={faUser} className="auth-icon" />
        <div className="auth-buttons">
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
