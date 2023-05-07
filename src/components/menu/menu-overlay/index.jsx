import PropTypes from "prop-types";

const MenuOverlay = ({ show }) => {
    return <div className={`offcanvas-overlay ${show ? "active" : ""}`}></div>;
};

MenuOverlay.propTypes = {
    show: PropTypes,
};

export default MenuOverlay;
