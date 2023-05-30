import React, { Component } from 'react';
import Product from '../Product/Product';
import Product1 from '../Product1/Product1';
import "./Main.css";
import iphone14pro from "../../commonResource/images/home/hero_iphone14pro__e5xbgo5ffhg2_largetall.jpg";
 class Main extends Component {
  render() {
    return (
      
      
      <div >
        
         {/* <img
          className="Main_image" src="../../commonResource/images/home/hero_iphone14pro__e5xbgo5ffhg2_largetall.jpg" alt=''
              />  */}
        <div className='Maintotal'>
          <Product
                id="12"
                title1="iPhone 14 pro"
                title2="Pro. Beyond."
                title3="Learn more "
                title4="Buy "
                image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone14pro-digitalmat-gallery-3-202209?wid=364&hei=333&fmt=png-alpha&.v=1663346233180"
          
          />
        </div>
        <div className='Maintota2'>
             <Product
                id="13"
                title1="iPhone 14"
                title2="Big and bigger."
                title3="Learn more "
                title4="Buy "
                image="
                https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone14plus-digitalmat-gallery-6-202209?wid=364&hei=333&fmt=png-alpha&.v=1662055814153"
          />
        </div>
        <div className='Maintota3'>
         <Product1
                id="14"
                title1="Homepod"
                title2="Profond sound."
                title3="Learn more "
                title4="Buy "
                image="https://www.apple.com/v/homepod/p/images/overview/hero__ernd10zm1dsi_large.jpg"
          />
          <Product1
                id="15"
                title1="fingertips."
                title2="Suppercharged by"
                title3="Learn more "
                title4="Buy "
                image="https://www.apple.com/v/logic-pro-for-ipad/a/images/overview/hero_main__eino273h63gy_large.jpg"
          />
        </div>
        <div className='Maintota4'>
         <Product1
                id="16"
                 title1="Your health data."
                title2="In your control."
                title3="Learn more "
                 title4="Buy "
                image="https://www.apple.com/v/home/ba/images/promos/privacy/privacy__fzwalkil8paq_medium.jpg"
          />
          <Product1
                id="16"
                 title1="iPadOS."
                title2="Expand what’s possible."
                title3="Learn more "
                title4="Buy "
                image="https://www.apple.com/v/ipad-pro/am/images/overview/cameras/cameras_lidar_1__bisiznolk9w2_large.jpg"
          />
        </div>

        <div className='Maintota5'>
         <Product1
                id="17"
                title1="Bring your entire"
                title2="studio to your shoot."
                title3="Learn more "
                title4="Buy "
                image="https://www.apple.com/v/final-cut-pro-for-ipad/a/images/overview/hero/main__ef1xja2uipiu_medium.jpg"
        />
         <Product1
                id="18"
                title1="Apple for k-12"
                title2="products and resources desined"
                title3="Learn more "
                title4="Buy "
                image="	https://www.apple.com/v/ipad-10.9/b/images/overview/design/fan__e9709q800z6u_medium.jpg"
          />
        </div>
       < div className='Maintota5'>
         <Product1
                id="19"
                title1="Your family joined"
                title2="at the wrist."
                title3="Learn more "
                title4="Buy "
                image="https://www.apple.com/v/watch/bc/images/overview/se/tile-watch-se__bxgdwpdx3whe_medium.jpg"
        />
        <Product1
                id="20"
                title1="Apple TV Support"
                title2="Pro. Beyond."
                title3="Learn more "
                title4="Buy "
                image="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_heros/hero-banner-apple-tv.image.small_2x.jpg"
            />
       </div>
      </div>
    )
  }
}
export default Main;