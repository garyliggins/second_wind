/* eslint-disable prettier/prettier */
import SocialIcon from "../../components/social-icon";
import { Link } from "react-router-dom";
import Newsletter from "../../components/newsletter";
import Logo from "../../components/logo";

const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                        <div className="widget-item">
                            <div className="about-widget">
                                <Logo
                                    classOption="footer-logo"
                                    image={`${process.env.PUBLIC_URL}/img/second-Wind-RS2.png`}
                                />
                                <p className="mb-0">
                                Guiding you toward overall mental, physical and emotional well-being.
                                </p>
                                <ul className="widget-contact-info">
                                    {/* <li className="info-address">
                                        <i className="icofont-location-pin"></i>
                                        Las vegas, Nevada
                                    </li> */}
                                    <li className="info-mail">
                                        <i className="icofont-email"></i>
                                        <a href="mailto://support@secondwindhealth.org">
                                            support@secondwindhealth.org
                                        </a>
                                    </li>
                                    <li className="info-phone">
                                        <i className="icofont-ui-call"></i>
                                        <a href="tel://(424)5351855">
                                            (424) 535 1855
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 offset-md-1 col-lg-3 offset-lg-0 col-xl-3 d-lg-none d-xl-block">
                        {/* <div className="widget-item d-inline-block">
                            <h4 className="widget-title line-bottom">
                                Popular Tags
                            </h4>
                            <div className="widget-tags">
                                <ul>
                                    <li>
                                        <Link to="/">Amazing</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Envato</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Themes</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Clean</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Wordpress</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Creative</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Mutilpurpose</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Retina Ready</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Twitter</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Responsive</Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                    {/* <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                        <div className="widget-item">
                            <h4 className="widget-title line-bottom">
                                Recent Posts
                            </h4>
                            <nav className="widget-posts">
                                <ul className="posts-item">
                                    <li>
                                        <Link to="/">
                                            <i className="icon icofont-rounded-double-right"></i>
                                            Lorem Ispum dolor sit amet putilor
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="icon icofont-rounded-double-right"></i>
                                            Medical is all about quality.
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="icon icofont-rounded-double-right"></i>
                                            Is your website user friendly ?
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="icon icofont-rounded-double-right"></i>
                                            Ai offer weekly updates &amp; more.
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="icon icofont-rounded-double-right"></i>
                                            Customer should love your web.
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="icon icofont-rounded-double-right"></i>
                                            Your site smooth and stunning.
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div> */}
                    <div className="col-sm-6 col-md-6 offset-md-1 col-lg-4 offset-lg-0 col-xl-3">
                        <div className="widget-item">
                            <h4 className="widget-title line-bottom">
                                Newsletter
                            </h4>
                            <div className="widget-newsletter">
                                <p>
                                    Sign up for our mailing list to get latest
                                    updates and offers.
                                </p>
                                <Newsletter mailchimpUrl="https://app.us21.list-manage.com/subscribe/post?u=d1d55230cf14c2acf77dcf2e1&amp;id=12db1fcee4&amp;f_id=0087d5e6f0" />
                            </div>
                            <div className="widget-social-icons">
                                <SocialIcon
                                    path="https://www.linkedin.com/company/second-wind-behavioral-health-centers"
                                    icon="icofont-linkedin"
                                />
                                <SocialIcon
                                    path="https://www.facebook.com/profile.php?id=61550310292587"
                                    icon="icofont-facebook"
                                />
                                <SocialIcon
                                  path="https://www.reddit.com/"
                                  icon="icofont-reddit"
                                />
                                <SocialIcon
                                  path="https://www.youtube.com/"
                                  icon="icofont-play-alt-1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-sm-12">
                            <div className="widget-copyright">
                                <p>
                                    &copy; 2023{" "}
                                    <span className="text-uppercase">Second Wind</span>
                                    . Made with{" "}
                                    <i className="icofont-heart-alt"></i> by {" "}
                                    Liggins Development
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
