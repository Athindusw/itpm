import React from 'react';

// import 'bootstrap-icons/font/bootstrap-icons.css';
import './Header.css';

export const Header = (params) => {
  const { countCartItems } = params;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Tea Products
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/payments">
                  Payments
                </a>
              </li>
            </ul>
          </div>
          <a className="navbar-brand" href="/cart">
            <i className="bi bi-bag-check"></i>
            <span className="badge badge-warning" id="lblCartCount">
              {countCartItems ? countCartItems : 0}
            </span>
          </a>
        </div>
      </nav>
    </>
  );
};
