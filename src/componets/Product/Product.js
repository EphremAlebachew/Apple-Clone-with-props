import React, { Component } from 'react';
import "./Product.css";
 class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title1, title2, title3,title4, image } = this.props;

    return (
      <div className="product">
        <div className="product_info"> <br></br>
          <p className='product_info1'>{title1}</p>
        </div>
        <div className="product_info2"><br></br>
          <p>{title2}</p>
        </div>
        {/* <div className="product_info3">
          <p>{title3}</p>
        </div> */}
        <div class="product_info3"><a href="">{title3}</a>
        <a href="">{title4}</a></div>
        
       < div className="product_image" >
          <img src={image} alt="" />
          </div>
      </div>
    );
  }
}
export default Product;