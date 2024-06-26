import PageBanner from "@/src/components/PageBanner";
import { NextSeo } from "next-seo";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const Projects = () => {
  return (<>
  <NextSeo
        title="Projects - Accenox"
        description="Explore Accenox's portfolio of projects - We have built custom web and mobile applications and software solutions for various clients, from start-ups to enterprises."
        canonical="https://www.accenox.com/projects"
        openGraph={{
          url: "https://www.accenox.com/projects",
          title: "Projects - Accenox",
          description: "Explore Accenox's portfolio of projects - We have built custom web and mobile applications and software solutions for various clients, from start-ups to enterprises.",
          images: [
            {
              url: "https://www.accenox.com/og-img-projects.png",
              width: 250,
              height: 43,
            }
          ],
          siteName: "Accenox",
        }}
      />
    <Layout>
      {/* Page Banner Start */}
      <PageBanner pageName={"Project Grid"} />
      {/* Page Banner End */}
      {/* Project Grid Area start */}
      <section className="project-grid-area pt-130 rpt-100 pb-10 rpb-25">
        <div className="container container-1210">
          <div className="row gap-110">
            <div className="col-lg-6">
              <div className="project-item">
                <div className="image wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/projects/project-grid1.jpg"
                    alt="Project Grid"
                  />
                  <Link legacyBehavior href="/#!">
                    <a className="project-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content wow fadeInUp delay-0-2s">
                  <Link legacyBehavior href="/projects">
                    <a className="category">Creative Work</a>
                  </Link>
                  <h2>
                    <Link legacyBehavior href="/#!">
                      <a>
                        Task Management <i>Dashboard</i>
                      </a>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-item">
                <div className="image wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/projects/project-grid2.jpg"
                    alt="Project Grid"
                  />
                  <Link legacyBehavior href="/#!">
                    <a className="project-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content wow fadeInUp delay-0-2s">
                  <Link legacyBehavior href="/projects">
                    <a className="category">Digital Product</a>
                  </Link>
                  <h2>
                    <Link legacyBehavior href="/#!">
                      <a>
                        Mobile Application <i>Development</i>
                      </a>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-item">
                <div className="image wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/projects/project-grid3.jpg"
                    alt="Project Grid"
                  />
                  <Link legacyBehavior href="/#!">
                    <a className="project-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content wow fadeInUp delay-0-2s">
                  <Link legacyBehavior href="/projects">
                    <a className="category">Creative Work</a>
                  </Link>
                  <h2>
                    <Link legacyBehavior href="/#!">
                      <a>
                        Product Design &amp; <i>Branding</i>
                      </a>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-item">
                <div className="image wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/projects/project-grid4.jpg"
                    alt="Project Grid"
                  />
                  <Link legacyBehavior href="/#!">
                    <a className="project-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content wow fadeInUp delay-0-2s">
                  <Link legacyBehavior href="/projects">
                    <a className="category">Digital Product</a>
                  </Link>
                  <h2>
                    <Link legacyBehavior href="/#!">
                      <a>
                        Digital Content For Web <i>Development</i>
                      </a>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-item">
                <div className="image wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/projects/project-grid5.jpg"
                    alt="Project Grid"
                  />
                  <Link legacyBehavior href="/#!">
                    <a className="project-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content wow fadeInUp delay-0-2s">
                  <Link legacyBehavior href="/projects">
                    <a className="category">Creative Work</a>
                  </Link>
                  <h2>
                    <Link legacyBehavior href="/#!">
                      <a>
                        Task Management <i>Dashboard</i>
                      </a>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-item">
                <div className="image wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/projects/project-grid6.jpg"
                    alt="Project Grid"
                  />
                  <Link legacyBehavior href="/#!">
                    <a className="project-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content wow fadeInUp delay-0-2s">
                  <Link legacyBehavior href="/projects">
                    <a className="category">Digital Product</a>
                  </Link>
                  <h2>
                    <Link legacyBehavior href="/#!">
                      <a>
                        Mobile Application <i>Development</i>
                      </a>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-item">
                <div className="image wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/projects/project-grid7.jpg"
                    alt="Project Grid"
                  />
                  <Link legacyBehavior href="/#!">
                    <a className="project-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content wow fadeInUp delay-0-2s">
                  <Link legacyBehavior href="/projects">
                    <a className="category">Creative Work</a>
                  </Link>
                  <h2>
                    <Link legacyBehavior href="/#!">
                      <a>
                        Product Design &amp; <i>Branding</i>
                      </a>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-item">
                <div className="image wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/projects/project-grid8.jpg"
                    alt="Project Grid"
                  />
                  <Link legacyBehavior href="/#!">
                    <a className="project-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content wow fadeInUp delay-0-2s">
                  <Link legacyBehavior href="/projects">
                    <a className="category">Digital Product</a>
                  </Link>
                  <h2>
                    <Link legacyBehavior href="/#!">
                      <a>
                        Digital Content For Web <i>Development</i>
                      </a>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Grid Area end */}
      {/* Work With Area start */}
      <section className="work-with-area pb-150 rpb-145 rel z-1">
        <div className="container">
          <div className="row justify-content-center pb-45 rpb-25">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Work With Us</span>
                <h2>Have Any Projects On Minds! Feel Free to Contact Us</h2>
                <Link legacyBehavior href="/contact">
                  <a className="explore-more text-start mt-30">
                    <i className="fas fa-arrow-right" />{" "}
                    <span>Explore more</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className="big-text light-opacity">Let’s Work Together</span>
      </section>
      {/* Work With Area end */}
      {/* footer area start */}
    </Layout>
    </>
  );
};
export default Projects;
