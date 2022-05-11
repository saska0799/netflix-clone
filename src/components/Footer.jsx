import React from "react";
import HomeCards from "./HomeCards";

const Footer = () => {
  return (
    <HomeCards>
      <div className="d-sm-flex flex-column text-start text-light text-muted">
        <h3 className="footer-text">Questions? Contact us.</h3>
        <div class="container">
          <div class="row py-3">
            <div class="col-6 col-sm-3">
              <ul>
                <li>FAQ</li>
                <li>Investor Relations</li>
                <li>Privacy</li>
                <li>Speed Test</li>
              </ul>
            </div>
            <div class="col-6 col-sm-3">
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie References</li>
                <li>Legal Notices</li>
              </ul>
            </div>
            <div class="col-6 col-sm-3">
              <ul>
                <li>Account</li>
                <li>Ways to Watch</li>
                <li>Coorporate Information</li>
                <li>Only on Netflix</li>
              </ul>
            </div>
            <div class="col-6 col-sm-3">
              <ul>
                <li>Media Center</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
        <h3 className="footer-text">Netflix Clone</h3>
      </div>
    </HomeCards>
  );
};

export default Footer;
