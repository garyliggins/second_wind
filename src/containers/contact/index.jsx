import React from "react";
import ContactAddress from "../../components/contact-address";
import ContactForm from "../../components/contact-form";
import SectionTitle from "../../components/section-title";

const ContactPageContainer = () => {
    return (
        <section className="contact-area">
            <div className="container" style={{ paddingTop: "30px"}}>
                <div className="row">
                    <div
                        className="col-lg-12"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        {/* add back when we add the map again <ContactAddress /> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="contact-form">
                            <SectionTitle
                                classOption="text-center"
                                subTitle="Unlock Your Potential"
                                title="<span> Begin Your Path to Transformation</span> <br/> Contact Us Today"
                            />
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPageContainer;
