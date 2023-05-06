import React from "react";

const GoogleMap = () => {
    return (
        <iframe
            title="Second Wind"
            className="contact-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425345.6116285297!2d-112.4546909078977!3d33.60497778178735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1bac!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1683405845168!5m2!1sen!2sus"
            aria-hidden="false"
        ></iframe>
    );
};

export default GoogleMap;
// eslint-disable-next-line prettier/prettier
// to embed actual address, go to google MailchimpSubscribe, search the address and click share, then embed, copy html