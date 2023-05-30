import React, { Component } from "react";
import "./Header.css"
import HeaderLink from "../HeaderLink/HeaderLink";

import cart from "../../commonResource/images/icons/cart-sm.png";
import search from "../../commonResource/images/icons/search-icon-sm.png";
import logo from "../../commonResource/images/icons/logo-sm.png";
 import { Link } from 'react-router-dom';

class Header extends Component {
 
  render() {
    return (
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <Link className="navbar-brand mx-auto" to="/">
              <img src={logo} alt="Logo" />
            </Link>
            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                
                <HeaderLink linkUrl="/mac/" linkName="Mac" />
                <HeaderLink linkUrl="/iphone" linkName="iphone" />
                <HeaderLink linkUrl="/ipad" linkName="ipad" />
                <HeaderLink linkUrl="/watch" linkName="watch" />
                <HeaderLink linkUrl="/tv" linkName="tv" />
                <HeaderLink linkUrl="/Music" linkName="Music" />
                <HeaderLink linkUrl="/Support" linkName="Support" />
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/search/">
                    <img src={search} alt="Search Icon" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/cart/">
                    <img src={cart} alt="Cart Icon" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;