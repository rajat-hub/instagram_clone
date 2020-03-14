import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav-menus">
          <div className="Nav-brand" href="/">
            <a className="Nav-brand-logo">Instagram</a>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
