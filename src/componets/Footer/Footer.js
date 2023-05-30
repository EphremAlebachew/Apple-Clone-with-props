import React from 'react';
import fooerCustem from"../Footer/footerCustom";
 import FooterLink from '../FooterLink/FooterLink.js';
import FooterLink1 from '../FooterLink1/FooterLink1.js';
import "./Footer.css";
import flag from "../../commonResource/images/icons/16.png";



function Section7() {
    return (
 
        <footer className="footer-wrapper">
      <div className="container">
        <div className="upper-text-container">
          <p>
            1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
            promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X
            in good condition. Additional trade‑in values require purchase of a
            new iPhone, subject to availability and limits. Must be at least 18.
            Apple or its trade-in partners reserve the right to refuse or limit
            any Trade In transaction for any reason. In‑store trade‑in requires
            presentation of a valid, government-issued photo ID (local law may
            require saving this information). Sales tax may be assessed on full
            value of new iPhone. Additional terms from Apple or Apple’s trade-in
            partners may apply. Monthly pricing: Available to qualified
            customers and requires 0% APR, 24-month installment loan with
            Citizens One or Apple Card Monthly Installments and iPhone
            activation with AT&T, Sprint, T-Mobile, or Verizon. Taxes and
            shipping not included. Additional Apple Card Monthly Installments
            terms are in the
            <a
              href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
              target="_blank"
            >
              Customer Agreement</a
            >. Additional iPhone Payments terms are
            <a
              href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/"
            >
              here</a
            >.
          </p>
          <p>
            2. Subscription required.<br/><br />
            Magic Keyboard sold separately.<br /><br />
            Apple TV+ is $4.99/month after free trial. One subscription per
            Family Sharing group. Offer good for 3 months after eligible device
            activation. Plan automatically renews until cancelled. Restrictions
            and other <a href="https://www.apple.com/promo/">terms </a> apply.
          </p>
        </div>
        <div className="footer-links-wrapper row">
          <div className="links-wrapper-1 col-sm-12 col-md">
            <h3  className="shop1" id="shop11">Shop and Learn</h3>
            <ul id="shop2">
                            <FooterLink linkUrl="mac" linkName="Mac" />
                            <FooterLink linkUrl="ipod" linkName="ipod" />
                            <FooterLink linkUrl="iphone" linkName="iphone" />
                            <FooterLink linkUrl="terms" linkName="terms" />
                            <FooterLink linkUrl="Watch" linkName="Watch" />
                            <FooterLink linkUrl="TV" linkName="TV" />
                            <FooterLink linkUrl="Music" linkName="Music" />
                            <FooterLink linkUrl="AirPods" linkName="AirPods" />
                            <FooterLink linkUrl="HomePod" linkName="HomePod" />
                            <FooterLink linkUrl="iPod touch" linkName="iPod touch" />
                            <FooterLink linkUrl="Accessories" linkName="Accessories" />
                            <FooterLink linkUrl="Gift Cards" linkName="Gift Cards" />
             
            </ul>
          </div>
          <div className="links-wrapper-2 col-sm-12 col-md">
            <h3 className="service1">Services</h3>
                        <ul id="service2">
                        <FooterLink linkUrl="Apple Music" linkName="Apple Music" />
                            <FooterLink linkUrl="Apple News+" linkName="Apple News+" />
                            <FooterLink linkUrl="Apple TV+" linkName="Apple TV+" />
                            <FooterLink linkUrl="Apple Arcade" linkName="Apple Arcade" />
                            <FooterLink linkUrl="Apple Card" linkName="Apple Card" />
                            <FooterLink linkUrl="iCloud" linkName="iCloud" />
             
            
             
            </ul>
            <h3 className="Account1">Account</h3>
              <ul id="Account2">
                <FooterLink linkUrl="Manage Your Apple ID" linkName="Manage Your Apple ID" />
                <FooterLink linkUrl="Apple Store Account" linkName="Apple Store Account" />
                <FooterLink linkUrl="iCloud.com" linkName="iCloud.com" />
             
             
            </ul>
          </div>
          <div className="links-wrapper-3 col-sm-12 col-md">
            <h3 className="apple1">Apple Store</h3>
              <ul id="apple2">
              <FooterLink linkUrl="Find a Store" linkName="Find a Store" />
                <FooterLink linkUrl="Today at Apple" linkName="Today at Apple" />
                <FooterLink linkUrl="Apple Camp" linkName="Apple Camp" />
                <FooterLink linkUrl="Field Tripp" linkName="Field Trip" />
                <FooterLink linkUrl="Apple Store App" linkName="Apple Store App" />
                <FooterLink linkUrl="Refurbished and Clearance" linkName="Refurbished and Clearance" />
                <FooterLink linkUrl="Financing" linkName="Financing" />
                <FooterLink linkUrl="Apple Trade In" linkName="Apple Trade In" />
                <FooterLink linkUrl="Order Status" linkName="Order Status" />
                <FooterLink linkUrl="Shopping Help" linkName="Shopping Help" />
            
             
            </ul>
          </div>
          <div className="links-wrapper-4 col-sm-12 col-md">
            <h3 className="Business1">For Business</h3>
              <ul id="Business2">
              <FooterLink linkUrl="Apple and Business" linkName="Apple and Business" />
                <FooterLink linkUrl="Shop for Business" linkName="Shop for Business" />
             
            </ul>
            <h3 className="Education1">For Education</h3>
              <ul id="Education2">
              <FooterLink linkUrl="Apple and Education" linkName="Apple and Education" />
              <FooterLink linkUrl="Shop for College" linkName="Shop for College" />
              
            </ul>
            <h3 className="Healthcare1">For Healthcare</h3>
              <ul id="Healthcare2">
              <FooterLink linkUrl="Manage Your Apple ID" linkName="Manage Your Apple ID" />
              <FooterLink linkUrl="Apple Store Account" linkName="Apple Store Account" />
              <FooterLink linkUrl="iCloud.com" linkName="iCloud.com" />
             
            </ul>
            <h3 className="Government1">For Government</h3>
              <ul id="Government2">
                
              <FooterLink linkUrl="Apple and Education" linkName="Apple and Education" />
              <FooterLink linkUrl="Shop for College" linkName="Shop for College" />
           
            </ul>
          </div>
          <div className="links-wrapper-5 col-sm-12 col-md">
            <h3 className="value1">Apple Values</h3>
              <ul id="value2">
              <FooterLink linkUrl="Genius Bar" linkName="Genius Bar" />
                <FooterLink linkUrl="Today at Apple" linkName="Today at Apple" />
                <FooterLink linkUrl="Today at Apple" linkName="Today at Apple" />
                <FooterLink linkUrl="Apple Camp" linkName="Apple Camp" />
                <FooterLink linkUrl="Field Trip" linkName="Field Trip" />
                <FooterLink linkUrl="Apple Store App" linkName="Apple Store App" />
            
             
            </ul>
            <h3 className="About1">About Apple</h3>
              <ul id="About2">
                <FooterLink linkUrl="Find a Store" linkName="Find a Store" />
                <FooterLink linkUrl="Genius Bar" linkName="Genius Bar" />
                <FooterLink linkUrl="Field Trip" linkName="Field Trip" />
                <FooterLink linkUrl="Apple Store App" linkName="Apple Store App" />
            
            
          
            </ul>
          </div>
        </div>
        <div className="my-apple-wrapper">
          More ways to shop: <a href="terms">Find an Apple Store</a> or
          <a href="terms">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </div>
        <div className="copyright-wrapper row">
          <div
            className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1"
          >
            Copyright &copy; 2020 Apple Inc. All rights reserved.
          </div>
          <div className="footer-links-terms col-sm-12 order-3 col-lg-6 order-lg-2">
              <ul>
              <FooterLink1 linkUrl1="Privacy Policy" linkName1="Privacy Policy" />
              <FooterLink1 linkUrl1="Terms of Use" linkName1="Terms of Use" />
              <FooterLink1 linkUrl1="Legal" linkName1="Legal" />
              <FooterLink1 linkUrl1="Site Map" linkName1="Site Map" />
           
           
            </ul>
          </div>
          <div
            className="footer-country col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3"
          >
            <div className="flag-wrapper"><img src={flag} /></div>
              <div className="footer-country-name">United States</div>
              
          </div>
        </div>
        </div>
     
    </footer>
  
         
  )
}
export default Section7;