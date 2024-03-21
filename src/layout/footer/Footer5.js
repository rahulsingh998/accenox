const Footer5 = () => {
  return (
    <footer className="main-footer footer-five pt-100">
      <div className="container container-1290 pb-40">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="footer-widget footer-about wow fadeInUp delay-0-2s">
              <div className="footer-logo mb-25">
                <a href="index.html">
                  <img src="assets/images/logos/accenox2.png" alt="Logo" />
                </a>
              </div>
              <p>
              We Offers well defined and standard Web Design & Web Design Services in a Cost-Effective Manner. For any enquiries please feel free to contact us !
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-widget footer-info wow fadeInUp delay-0-4s">
              <ul className="list-style-two">
                <li>
                  <i className="far fa-envelope" />{" "}
                  <a href="mailto:connect@accenox.com">connect@accenox.com</a>
                </li>
                {/* <li>
                  <i className="far fa-phone" />{" "}
                  <a href="callto:+000(123)45688">+000 (123) 456 88</a>
                </li> */}
                <li>
                  <i className="far fa-clock" />{" "}
                  <span>Monday - Friday, 10am - 5pm</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-widget newsletter-widget wow fadeInUp delay-0-6s">
              <form className="footer-newsletter" action="#">
                <input type="email" placeholder="connect@accenox.com" required />
                <button type="submit" disabled>
                  <i className="fas fa-arrow-right" />
                </button >
              </form>
              <div className="policy">
                <input id="privacy-policy" type="checkbox"  />
                <label htmlFor="privacy-policy">
                  I agree to the <a href="about.html">Privacy Policy</a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area pt-25 pb-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="footer-copyright-text wow fadeInUp delay-0-2s">
                <p>
                  Copyright @2024, <a href="#!">Accenox</a> All Rights
                  Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-bottom-menu text-lg-end wow fadeInRight delay-0-2s">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li> 
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <a href="#!">Faqs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer5;
