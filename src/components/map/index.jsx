import React from "react";

const GoogleMap = () => {
    return (
        <iframe
            title="Second Wind"
            className="contact-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206253.53243764432!2d-115.33980774896925!3d36.124887126906515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1690588877474!5m2!1sen!2sus"
            aria-hidden="false"
        ></iframe>
    );
};

export default GoogleMap;
// eslint-disable-next-line prettier/prettier
// to embed actual address, go to google MailchimpSubscribe, search the address and click share, then embed, copy html
