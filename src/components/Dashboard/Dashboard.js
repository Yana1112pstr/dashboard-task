import React, { useState } from 'react';
import './Dashboard.scss';
import Logo from '../../images/logo.svg';
import { ReactComponent as Home } from '../../images/home.svg';
import { ReactComponent as Product } from '../../images/product.svg';
import { ReactComponent as Customers } from '../../images/customers.svg';
import { ReactComponent as Income } from '../../images/income.svg';
import { ReactComponent as Promote } from '../../images/promote.svg';
import { ReactComponent as Help } from '../../images/help.svg';
import { ReactComponent as Right } from '../../images/right.svg';
import user from '../../images/user.jpg';
import { ImSearch } from 'react-icons/im';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Dashboard = () => {
  const [filter, setFilter] = useState('');

  const data = [
    {
      id: 1,
      CustomerName: 'Jane Cooper',
      Company: 'Microsoft',
      PhoneNumber: '(225) 555-0118',
      Email: 'jane@microsoft.com',
      Country: 'United States',
      Status: 'Active'
    },
    {
      id: 2,
      CustomerName: 'Floyd Miles',
      Company: 'Yahoo',
      PhoneNumber: '(205) 555-0100',
      Email: 'floyd@yahoo.com',
      Country: 'Kiribati',
      Status: 'Inactive'
    },
    {
      id: 3,
      CustomerName: 'Ronald Richards',
      Company: 'Adobe',
      PhoneNumber: '(302) 555-0107',
      Email: 'ronald@adobe.com',
      Country: 'Israel',
      Status: 'Inactive'
    },
    {
      id: 4,
      CustomerName: 'Marvin McKinney',
      Company: 'Tesla',
      PhoneNumber: '(252) 555-0126',
      Email: 'marvin@tesla.com',
      Country: 'Iran',
      Status: 'Active'
    },
    {
      id: 5,
      CustomerName: 'Jerome Bell',
      Company: 'Google',
      PhoneNumber: '(629) 555-0129',
      Email: 'jerome@google.com',
      Country: 'Réunion',
      Status: 'Active'
    },
    {
      id: 6,
      CustomerName: 'Kathryn Murphy',
      Company: 'Microsoft',
      PhoneNumber: '(406) 555-0120',
      Email: 'kathryn@microsoft.com',
      Country: 'Curaçao',
      Status: 'Active'
    },
    {
      id: 7,
      CustomerName: 'Jacob Jones',
      Company: 'Yahoo',
      PhoneNumber: '(208) 555-0112',
      Email: 'jacob@yahoo.com',
      Country: 'Brazil',
      Status: 'Active'
    },
    {
      id: 8,
      CustomerName: 'Kristin Watson',
      Company: 'Facebook',
      PhoneNumber: '(704) 555-0127',
      Email: 'kristin@facebook.com',
      Country: 'Åland Islands',
      Status: 'Inactive'
    }
  ];

  const iconColor = 'rgba(145, 151, 179, 1)';
  const whiteColor = 'rgba(255, 255, 255, 1)';

  const toFilterArray = () => {
    const normalizedFilter = filter.toLowerCase();
    return data.filter(
      (item) =>
        item.CustomerName.toLowerCase().includes(normalizedFilter) ||
        item.Company.toLowerCase().includes(normalizedFilter) ||
        item.PhoneNumber.includes(normalizedFilter) ||
        item.Email.toLowerCase().includes(normalizedFilter) ||
        item.Country.toLowerCase().includes(normalizedFilter) ||
        item.Status.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredArray = toFilterArray();

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  return (
    <div className="container">
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
      <section className="main">
        <h3 className="main-title">Hello Evano 👋🏼,</h3>
        <div className="main-content">
          <div className="search">
            <div className="search-header">
              <p>All Customers</p>
              <span>Active Members</span>
            </div>
            <div className="search-input">
              <ImSearch className="icon" />
              <input
                className="input"
                id="myInput"
                value={filter}
                onChange={changeFilter}
                placeholder="Search name"
              />
            </div>
          </div>
          <div className="users">
            <table className="table" id="table">
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Company</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredArray.map(
                  ({ id, CustomerName, Company, PhoneNumber, Email, Country, Status }) => {
                    return (
                      <tr key={id}>
                        <td>{CustomerName}</td>
                        <td>{Company}</td>
                        <td>{PhoneNumber}</td>
                        <td>{Email}</td>
                        <td>{Country}</td>
                        <td className="status">
                          <div className={Status}>{Status}</div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
          <div className="footer">
            <p className="text">Showing data 1 to 8 of 256K entries</p>
            <div className="pagination">
              <button className="btn">
                <AiOutlineLeft />
              </button>
              <button className="btn current">1</button>
              <button className="btn">2</button>
              <button className="btn">3</button>
              <button className="btn">4</button>
              <span className="more">...</span>
              <button className="btn">40</button>
              <button className="btn">
                <AiOutlineRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
