import React, { useState } from 'react';
import './Main.scss';
import { ImSearch } from 'react-icons/im';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Main = () => {
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
  );
};

export default Main;
