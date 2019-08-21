import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer-area section-gap">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <h4>About Me</h4>
              <p>
                We have tested a number of registry fix and clean utilities and
                present our top 3 list on our site for your convenience.
              </p>
              <p class="footer-text">
                Copyright &copy;{new Date().getFullYear()} All rights reserved |
                This template is made with{" "}
                <i class="fa fa-heart-o" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </p>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <h4>Newsletter</h4>
              <p>Stay updated with our latest trends</p>
              <div class="" id="mc_embed_signup">
                <form
                  target="_blank"
                  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                  method="get"
                >
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      name="EMAIL"
                      placeholder="Enter Email Address"
                      required
                    />
                    <div class="input-group-btn">
                      <button class="btn btn-default" type="submit">
                        <span class="lnr lnr-arrow-right" />
                      </button>
                    </div>
                    <div class="info" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-6 social-widget">
            <div class="single-footer-widget">
              <h4>Follow Me</h4>
              <p>Let us be social</p>
              <div class="footer-social d-flex align-items-center">
                <a href="#">
                  <i class="fa fa-facebook" />
                </a>
                <a href="#">
                  <i class="fa fa-twitter" />
                </a>
                <a href="#">
                  <i class="fa fa-dribbble" />
                </a>
                <a href="#">
                  <i class="fa fa-behance" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
