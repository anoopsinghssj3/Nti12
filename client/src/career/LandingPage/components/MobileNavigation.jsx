import React from "react";

const MobileNavigation = () => {
  const navItems = [
    { id: 1, label: "Mobile", icon: "" },
    { id: 2, label: "Search", icon: "" },
    { id: 3, label: "Inbox", icon: "" },
    { id: 4, label: "Favorite", icon: "" },
    { id: 5, label: "Account", icon: "" },
    { id: 6, label: "Setting", icon: "" },
  ];

  return (
    <nav className="mobile-navigation" aria-label="Bottom navigation">
      <ul className="mobile-nav-content">
        {navItems.map((item) => (
          <li key={item.id} className="mobile-nav-item">
            <button
              type="button"
              className="mobile-nav-button"
              aria-label={item.label}
              title={item.label}
            >
              <div className="mobile-nav-icon">{item.icon}</div>
              <span className="mobile-nav-label">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavigation;
