import React from 'react';

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-sticky bg-body d-block z-fixed p-0">
      <div className="container py-2 py-lg-3">
        <div className="d-flex align-items-center gap-3">
          <button
            type="button"
            className="navbar-toggler me-4 me-md-2"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <a className="navbar-brand fs-2 py-0 m-0 me-auto me-sm-n5" href="/">
          <img src="/assets/logo/logo.png" className="logoHeader" alt="ECO-SHOP Logo" />
          ECO-SHOP
        </a>
        <div className="d-flex align-items-center">
          <button
            type="button"
            className="btn btn-icon btn-lg fs-xl btn-outline-secondary border-0 rounded-circle animate-shake d-lg-none"
            data-bs-toggle="offcanvas"
            data-bs-target="#searchBox"
            aria-controls="searchBox"
            aria-label="Toggle search bar"
          >
            <i className="ci-search animate-target"></i>
          </button>
          <div className="user-container">
            <a
              className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-shake d-none d-md-inline-flex"
              href="/sign-in"
              id="user-icon"
            >
              <i className="ci-user animate-target"></i>
              <span className="visually-hidden">Account</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
