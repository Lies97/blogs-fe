import React from 'react';
import logo from '../../assets/images/logo.jpg';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="icon-wrapper">
            <Link
              to="/"
              className="color-light d-flex justify-content-center align-items-center"
            >
              <p className="color-light mb-0 me-2">Home</p>
              <Icon name="home" size="large" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
