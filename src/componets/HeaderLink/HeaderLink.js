import React, { Component } from 'react';
import "./HeaderLink.css";

class HeaderLink extends Component {
    constructor(props) {
        super(props);
      }
    
    render() {
                const { linkName, linkUrl } = this.props;
            return (
              <div>
                <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href={linkUrl}>
                    {linkName}</a>
                  </li>
              </div>
    )
  }
}
export default HeaderLink;