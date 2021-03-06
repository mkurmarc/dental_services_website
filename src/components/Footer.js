import React from "react";
import footerLogo from "../images/edited/logos/logoname_noback.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer--container">
        <div className="footer--item_slogan">
          <img
            src={footerLogo}
            alt="Advanced Dental Solutions LLC"
            className="footer--logo"
          />
          <p className="footer--text">
            Advanced Dental Solutions leverages technology to elevate dental
            practices.
          </p>
        </div>

        <div className="footer--item_contact">
          <p className="footer--contact_title">Get in touch</p>
          <div className="footer--contact-section">
            <span class="material-icons footer--icon">place</span>
            <p className="footer--contact-paragraph">
              811 Wilshire Blvd, Floor 17 <br /> Los Angeles, CA 90017
            </p>
          </div>
          <div className="footer--contact-section">
            <span class="material-icons footer--icon">mail</span>
            <p className="footer--contact-paragraph">
              ADSolutionsLab@gmail.com
            </p>
          </div>
          <div className="footer--contact-section">
            <span class="material-icons footer--icon">phone</span>
            <p className="footer--contact-paragraph">(626) 720-1944</p>
          </div>
        </div>

        <div className="footer--item_signup">
          <h5 className="signup--title">Sign Up For Our Newsletter</h5>
          <p>
            We will send you updates on our latest products and more.
            Unsubscribe at any time.
          </p>
        </div>
      </div>
    </footer>
  );
}
