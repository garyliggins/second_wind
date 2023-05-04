import React from "react";
import Layout from "../layouts/index.jsx";
import Header from "../layouts/header";
import PageTitleContainer from "../containers/global/page-title/index.jsx";
import Footer from "../layouts/footer";
import AboutContainer from "../containers/about";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";

const AboutPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Second Wind– About" />
                <div className="wrapper">
                    <Header />
                    <div className="main-content site-wrapper-reveal">
                        <PageTitleContainer
                            image="img/photos/4295312.jpg"
                            subTitle="Second Wind"
                            title="About <br/><span>second wind</span>"
                        />
                        <AboutContainer />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default AboutPage;
