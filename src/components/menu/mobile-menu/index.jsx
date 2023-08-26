import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { getClosest, getSiblings, slideToggle, slideUp } from "../../../utils";
import SocialIcon from "../../social-icon";

const MobileMenu = ({ show, onClose }) => {
    const onClickHandler = (e) => {
        const target = e.currentTarget;
        const parentEl = target.parentElement;
        if (
            parentEl?.classList.contains("menu-expand") ||
            target.classList.contains("menu-expand")
        ) {
            const element = target.classList.contains("icon")
                ? parentEl
                : target;
            const parent = getClosest(element, "li");
            const childNodes = parent.childNodes;
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                const sibChildNodes = sibling.childNodes;
                sibChildNodes.forEach((child) => {
                    if (child.nodeName === "UL") {
                        slideUp(child, 1000);
                    }
                });
            });
            childNodes.forEach((child) => {
                if (child.nodeName === "UL") {
                    slideToggle(child, 1000);
                }
            });
        }
    };
    return (
        <div
            className={`offcanvas offcanvas-mobile-menu ${
                show ? "offcanvas-open" : ""
            }`}
         >
            <div className="inner" style={{ paddingRight: "20px" }}>
                <div className="border-bottom mb-3 pb-3 text-end">
                    <button className="offcanvas-close" onClick={onClose}>
                        ×
                    </button>
                </div>
                <div className="offcanvas-head mb-3">
                    <div className="header-top-offcanvas">
                        {/* <p>
                            <i className="icofont-google-map"></i>{" "}
                            <span>ADDRESS:</span> LAS VEGAS, NEVADA
                        </p> */}
                    </div>
                </div>
                <nav className="offcanvas-menu">
                    <ul>
                        <li>
                            <NavLink exact to={process.env.PUBLIC_URL + "/"}>
                                <span className="menu-text">Home</span>
                            </NavLink>
                            <span
                                className="menu-expand"
                                onClick={onClickHandler}
                                aria-hidden="true"
                            ></span>
                            <ul className="offcanvas-submenu">
                                <li>
                                    <NavLink
                                        exact
                                        to={process.env.PUBLIC_URL + "/"}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to={process.env.PUBLIC_URL + "/service"}>
                                <span className="menu-text">Services</span>
                            </NavLink>
                            <span
                                className="menu-expand"
                                onClick={onClickHandler}
                                aria-hidden="true"
                            ></span>
                            <ul className="offcanvas-submenu">
                                <li>
                                    <NavLink
                                        to={process.env.PUBLIC_URL + "/service"}
                                    >
                                        Service
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={
                                            process.env.PUBLIC_URL +
                                            "/service-details/1"
                                        }
                                    >
                                        service details
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <NavLink to={process.env.PUBLIC_URL + "/blog"}>
                                <span className="menu-text">blog</span>
                            </NavLink>
                            <span
                                className="menu-expand"
                                onClick={onClickHandler}
                                aria-hidden="true"
                            ></span>
                            <ul className="offcanvas-submenu">
                                <li>
                                    <NavLink
                                        to={process.env.PUBLIC_URL + "/blog"}
                                    >
                                        Blog list
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={
                                            process.env.PUBLIC_URL +
                                            "/blog-details/1"
                                        }
                                    >
                                        Blog details
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <NavLink to={process.env.PUBLIC_URL + "/about"}>
                                about
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={process.env.PUBLIC_URL + "/contact"}>
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="offcanvas-social my-4">
                    <ul>
                        <li>
                            <SocialIcon
                                path="https://www.facebook.com/profile.php?id=61550310292587"
                                icon="icofont-facebook"
                            />
                        </li>
                        <li>
                            <SocialIcon
                                path="https://www.instagram.com/"
                                icon="icofont-instagram"
                            />
                        </li>
                        <li>
                            <SocialIcon
                                path="https://www.linkedin.com/company/second-wind-behavioral-health-centers"
                                icon="icofont-linkedin"
                            />
                        </li>
                        <li>
                            <SocialIcon
                                path="https://www.youtube.com/"
                                icon="icofont-play-alt-1"
                            />
                        </li>
                    </ul>
                </div>

                <ul className="media-wrap">
                    <li className="media media-list">
                        <span className="media-icon">
                            <i className="icofont-clock-time"></i>
                        </span>
                        <div className="media-content">
                            <span className="media-sub-heading">
                                hours
                            </span>
                            <span className="media-heading">
                                MON - FRI: 9AM - 5PM{" "} <br/> Sat: 10am - 4pm
                            </span>
                        </div>
                    </li>

                    <li className="media media-list">
                        <span className="media-icon">
                            <i className="icofont-ui-call"></i>
                        </span>
                        <div className="media-content">
                            <span className="media-sub-heading">
                                contact us
                            </span>
                            <a
                                className="media-heading"
                                href="tel:424-535-1855"
                            >
                                424-535-1855
                            </a>
                        </div>
                    </li>

                    <li className="media media-list">
                        <span className="media-icon">
                            <i className="icofont-envelope"></i>
                        </span>
                        <div className="media-content">
                            <span className="media-sub-heading">email us</span>
                            <a
                                className="media-heading"
                                href="mailto:support@secondwindhealth.org"
                            >
                                support@secondwindhealth.org
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

MobileMenu.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
};

export default MobileMenu;
