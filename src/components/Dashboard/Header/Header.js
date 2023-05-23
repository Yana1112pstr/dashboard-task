import React from 'react';
import './Header.scss';
import Logo from '../../../images/logo.svg';
import { ReactComponent as Home } from '../../../images/home.svg';
import { ReactComponent as Product } from '../../../images/product.svg';
import { ReactComponent as Customers } from '../../../images/customers.svg';
import { ReactComponent as Income } from '../../../images/income.svg';
import { ReactComponent as Promote } from '../../../images/promote.svg';
import { ReactComponent as Help } from '../../../images/help.svg';
import { ReactComponent as Right } from '../../../images/right.svg';
import user from '../../../images/user.jpg';

const Header = () => {
  const iconColor = 'rgba(145, 151, 179, 1)';
  const whiteColor = 'rgba(255, 255, 255, 1)';
  return (
    <header className="header">
      <div className="header-logo-nav">
        <div className="logo">
          <img className="logo-svg" src={Logo} alt="Logo" />
          <h1 className="logo-header">Dashboard</h1>
          <span className="logo-span">v.01</span>
        </div>
        <div className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#dashboard" className="nav-link">
                <div className="nav-link-text">
                  <Home stroke={iconColor} className="nav-icon" />
                  <span>Dashboard</span>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a href="#product" className="nav-link">
                <div className="nav-link-text">
                  <Product fill={iconColor} />
                  <span>Product</span>
                </div>

                <Right stroke={iconColor} />
              </a>
            </li>
            <li className="nav-item current">
              <a href="#customers" className="nav-link">
                <div className="nav-link-text">
                  <Customers />
                  <span>Customers</span>
                </div>

                <Right stroke={whiteColor} />
              </a>
            </li>
            <li className="nav-item">
              <a href="#income" className="nav-link">
                <div className="nav-link-text">
                  <Income stroke={iconColor} />
                  <span>Income</span>
                </div>

                <Right stroke={iconColor} />
              </a>
            </li>
            <li className="nav-item">
              <a href="#promote" className="nav-link">
                <div className="nav-link-text">
                  <Promote fill={iconColor} />
                  <span>Promote</span>
                </div>

                <Right stroke={iconColor} />
              </a>
            </li>
            <li className="nav-item">
              <a href="#help" className="nav-link">
                <div className="nav-link-text">
                  <Help fill={iconColor} />
                  <span>Help</span>
                </div>

                <Right stroke={iconColor} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="user">
        <div className="user-avatar">
          <img src={user} alt="user" className="user-img" />
        </div>
        <div className="user-descr">
          <h3 className="user-title">Evano</h3>
          <span className="user-role">Project Manager</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
