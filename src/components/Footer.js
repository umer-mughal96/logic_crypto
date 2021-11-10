import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container ad-container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div
                  className="col-lg-3 col-md-3 col-sm-6 footer-contact"
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-easing="linear"
                >
                  <div className="ml-2 footer-image">
                    <img
                      src="files/images/knowledgepage/footer-logo.svg"
                      alt=""
                    />
                  </div>
                  <div className="social-links mt-3">
                    <a href="#" className="facebook">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="#" className="twitter">
                      <i className="fab fa-twitter-square"></i>
                    </a>
                    <a href="#" className="instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-3 col-sm-6 footer-links"
                  data-aos="fade-down"
                  data-aos-duration="700"
                  data-aos-easing="linear"
                >
                  <h4>Product</h4>
                  <ul>
                    <li>
                      <Link to='/invest'>Invest</Link>
                    </li>
                    <li>
                      <Link to='/enth'>About Us</Link>
                    </li>
                    <li>
                      <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                      <Link to='#'>Tutorials</Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="col-lg-3 col-md-3 col-sm-6 footer-links"
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-easing="linear"
                >
                  <h4>Company</h4>
                  <ul>
                    <li>
                      <a href="#">Medium</a>
                    </li>
                    <li>
                      <a href="#">Trading View</a>
                    </li>
                    <li>
                      <a href="#">Jobs</a>
                    </li>
                  </ul>
                </div>
                <div
                  className="col-lg-3 col-md-3 col-sm-6 footer-links"
                  data-aos="fade-down"
                  data-aos-duration="700"
                  data-aos-easing="linear"
                >
                  <h4>Resources</h4>
                  <ul>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <a href="#">Resource Library</a>
                    </li>
                    <li>
                      <Link to="/privacypolicy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/term">Terms & Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footercopy-right">
        <p>All rights reserved 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
