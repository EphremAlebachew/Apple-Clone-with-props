import React, { Component } from 'react'

class FooterLink1 extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        const { linkName1, linkUrl1 } = this.props;
    return (
      <div className="footer-links-terms">
         <li><a href={linkUrl1}>{linkName1}</a></li>
      </div>
    )
  }
}
export default FooterLink1;