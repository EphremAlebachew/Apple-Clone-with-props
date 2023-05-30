import React, { Component } from 'react'

class FooterLink extends Component {
    constructor(props) {
        super(props);
      }
    
    render() {
        const { linkName, linkUrl } = this.props;
    return (
      <div>
        <li><a href={linkUrl}>{linkName}</a></li>
        </div>
       
    )
  }
}
export default FooterLink;