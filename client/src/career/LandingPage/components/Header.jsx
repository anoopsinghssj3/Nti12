import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e86a4ba9a738fe942c99ccb77d69a0993f6e88bd?width=62"
          alt="NTI Logo"
          className="logo-image"
        />
      </div>
      <nav className="header-menu">
        <div className="menu-items">
          <div className="menu-item">
            <span>Home</span>
          </div>
          <div className="menu-item">
            <span>Features</span>
          </div>
          <div className="menu-item">
            <span>Community</span>
          </div>
          <div className="menu-item">
            <span>Blog</span>
          </div>
          <div className="menu-item">
            <span>Pricing</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
