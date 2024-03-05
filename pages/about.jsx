import dynamic from 'next/dynamic';
 
const Counter = dynamic(() => import('@/src/components/Counter'), {
  ssr: false,
});
import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const About = () => {
  return (
    <Layout>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-11">
              <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
              Building Your Digital 
               
                Success Story
                <span className="arrow">
                  <img
                    className="wow fadeInLeft delay-0-6s"
                    src="assets/images/hero/title-arrow.png"
                    alt="Arrow"
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Page Banner Section End */}
      {/* Video Area start */}
      <div className="video-area-two rel z-1">
        <div className="container-fluid">
          <div className="video-part style-two mb-40 wow fadeInUp delay-0-2s text-center">
            <img src="assets/images/video/responsive.png" alt="Video" />
            {/* <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a> */}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft delay-0-2s">
              <div className="client-text text-lg-start text-center mt-40 pb-50">
              Improve your digital presence with our experts in Web and mobile Apps, Web Design, and UI/UX Design. Your vision, our innovation. Lets build together!
              </div>
              <div className="row">
                <div className="col-xl-10">
                  <div className="client-logo-wrap">
                    <Link legacyBehavior href="/contact">
                      <a className="client-logo-item">
                        <img
                          src="assets/images/client-logos/client-logo-two1.png"
                          alt="Client Logo"
                        />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a className="client-logo-item">
                        <img
                          src="assets/images/client-logos/client-logo-two2.png"
                          alt="Client Logo"
                        />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a className="client-logo-item">
                        <img
                          src="assets/images/client-logos/client-logo-two3.png"
                          alt="Client Logo"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight delay-0-2s">
              <div className="video-year text-lg-end text-center rel">
                Accenox
                <img
                  className="leaf-shape"
                  src="assets/images/video/leaf.png"
                  alt="Leaf"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="about-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-3">
              <div className="about-image rmb-45 wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/about/circle-text.svg"
                  alt="Circle Text"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-9">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">About Company</span>
                  <h2>
                  We are the large business expert in Europe and Asia
                  </h2>
                </div>
                <div className="content">
                  <p>
                  We expertise in Web Design & Development, Ecommerce Websites, Graphic Design , Digital Marketing, SEO Services, Social Media Marketing, Logo Design, Business Card Design, Brochure Design, Letter Head Design etc. We offer all kinds of custom built websites, web portals and web applications. Our unique balance of innovative services and ontime delivery can help you win customers quickly.
                  </p>
                  <Link legacyBehavior href="/about">
                    <a className="read-more mt-10">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video Area end */}
      {/* Who We Are start */}
      <section className="who-we-are-area pt-100 rpt-80 pb-75 rpb-45 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Who We Are</span>
                <h2>We are Professional and Experience Team </h2>
              </div>
            </div>
          </div>
          <div className="row gap-90">
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-2s">
                <div className="why-choose-header">
                  <i className="flaticon-creativity" />
                  <h5>Customize your site</h5>
                </div>
                <p>
                Tailored websites crafted to fit your unique needs, ensuring a standout online presence.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-4s">
                <div className="why-choose-header">
                  <i className="flaticon-mobile-banking" />
                  <h5>Application development</h5>
                </div>
                <p>
                Transforming your ideas into powerful applications, driving innovation in the digital realm.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-6s">
                <div className="why-choose-header">
                  <i className="flaticon-optimization-1" />
                  <h5>Digital marketing</h5>
                </div>
                <p>
                Elevate your online presence with strategic digital marketing solutions tailored to your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Who We Are end */}
      {/* Headline area start */}
      <div className="headline-area bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Team Area start */}
      
      {/* Team Area end */}
      {/* Statistics Area start */}
      <div
        className="statistics-area pt-100 rpt-70 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-2s">
                <i className="fal fa-check-circle" />
                <Counter end={25} />
                <span className="counter-title">Years Of Experience</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-3s">
                <i className="fal fa-check-circle" />
                <Counter end={3} extraClass={"k"} />
                <span className="counter-title">Project’s Complete</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-4s">
                <i className="fal fa-check-circle" />
                <Counter end={48} />
                <span className="counter-title">Professionals Team Member</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-5s">
                <i className="fal fa-check-circle" />
                <Counter end={92} />
                <span className="counter-title">Awards Winning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Statistics Area end */}
      {/* Testimonial Area start */}
      {/* <section className="testimonial-section pt-70 rpt-30">
        <div className="container container-1210">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-border-shape rmb-20 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonials-four.jpg"
                  alt="Testimonial Left Image"
                />
                <div className="bottom-border" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-one-right-part wow fadeInLeft delay-0-2s">
                <Swiper
                  {...sliderProps.testimonialsActiveSwiper}
                  className="testimonials-active"
                >
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="testimonial-controls mt-75 rmt-40">
                  <button className="testimonial-prev slick-arrow">
                    <i className="far fa-chevron-left" />
                  </button>
                  <div className="testimonial-dots">
                    <div className="slick-dots"></div>
                  </div>
                  <button className="testimonial-next slick-arrow">
                    <i className="far fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Testimonial Area end */}
      {/* Client Logo Two start */}
      <section className="client-logo-area pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="section-title text-center mb-60">
            <h4>We Have 1520+Global Clients</h4>
          </div>
          <div className="client-logo-wrap">
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/client-logos/client-logo1.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-3s">
                <img
                  src="assets/images/client-logos/client-logo2.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/client-logos/client-logo3.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-5s">
                <img
                  src="assets/images/client-logos/client-logo4.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-6s">
                <img
                  src="assets/images/client-logos/client-logo5.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-7s">
                <img
                  src="assets/images/client-logos/client-logo6.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default About;
