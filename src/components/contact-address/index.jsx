import React from "react";
import { Link } from "react-router-dom";

const ContactAddress = () => {
    return (
        <div className="contact-info-content">
            <div className="info-address">
                <h2 className="title">
                    Las Vegas, <span>Nevada</span>
                </h2>
                <p> Las Vegas Location Address , United States of America</p>
                <Link to="/">
                    <span>Email:</span> support@secondwindhealth.org
                </Link>
            </div>
            <div className="brand-office">
                <div className="info-tem style-two">
                    <h6>Call directly:</h6>
                    <p>+1 424-535-1855</p>
                </div>
                {/* <div className="info-tem">
                    <h6>Brand Offices:</h6>
                    <p>
                        Allentown PA | Allanta, GA | Chicago, IL | Dallas, TX,
                        Edison, NJ | Houston, TX
                    </p>
                </div> */}
                <div className="info-tem mb-0">
                    <h6>Hours:</h6>
                    <p>Mon - Sat: 9:00am - 6:00pm, Sunday closed</p>
                </div>
            </div>
        </div>
    );
};

export default ContactAddress;
