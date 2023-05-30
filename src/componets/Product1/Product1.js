import React, { Component } from 'react';
import "./Product1.css";
 class Product1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title1, title2, title3,title4, image } = this.props;

    return (
      <div className="product6">
        <div className="product_info7">
          <p className='product_info8'>{title1}</p>
        </div>
        <div className="product_info9">
          <p>{title2}</p>
        </div>
       
        <div class="product_info10"><a href="">{title3}</a>
        <a href="">{title4}</a>
        </div>
         
         
        <img className="product_image11" src={image} alt="" />
      </div>
    );
  }
}
export default Product1;