import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container ad-container">
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div
                  class="col-lg-3 col-md-3 col-sm-6 footer-contact"
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-easing="linear"
                >
                  <div class="ml-2 footer-image">
                    <img
                      src="files/images/knowledgepage/footer-logo.svg"
                      alt=""
                    />
                  </div>
                  <div class="social-links mt-3">
                    <a href="#" class="facebook">
                      <i class="fab fa-facebook-square"></i>
                    </a>
                    <a href="#" class="twitter">
                      <i class="fab fa-twitter-square"></i>
                    </a>
                    <a href="#" class="instagram">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div
                  class="col-lg-3 col-md-3 col-sm-6 footer-links"
                  data-aos="fade-down"
                  data-aos-duration="700"
                  data-aos-easing="linear"
                >
                  <h4>Product</h4>
                  <ul>
                    <li>
                      <a href="#">Invest</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Tutorials</a>
                    </li>
                  </ul>
                </div>
                <div
                  class="col-lg-3 col-md-3 col-sm-6 footer-links"
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
                  class="col-lg-3 col-md-3 col-sm-6 footer-links"
                  data-aos="fade-down"
                  data-aos-duration="700"
                  data-aos-easing="linear"
                >
                  <h4>Resources</h4>
                  <ul>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Resource Library</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footercopy-right">
        <p>All rights reserved 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
