import React from 'react';

function NavBar() {
  return (
    <div className="collapse navbar-stuck-hide" id="stuckNav">
      <nav className="offcanvas offcanvas-start" id="navbarNav" tabIndex="-1">
        <div className="offcanvas-header py-3">
          <h5 className="offcanvas-title">Browse Cartzilla</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body pt-1 pb-3 py-lg-0">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Trang chủ
              </a>
            </li>
            <li className="nav-item">
              <a href="/about-us" className="nav-link">
                Về chúng tôi
              </a>
            </li>
            <li className="nav-item">
              <a href="/products" className="nav-link">
                Sản phẩm
              </a>
            </li>
            <li className="nav-item">
              <a href="/news-events" className="nav-link">
                Tin tức & sự kiện
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
