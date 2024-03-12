/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "../../../components/section-title";
import PricingItem from "../../../components/pricing";
import HomeData from "../../../data/home.json";
import PropTypes from "prop-types";

const PricingContainer = ({ pricingClassOption }) => {
    return (
        <div className="pricing-area pricing-default-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            classOption="text-center"
                            subTitle=""
                            title="<span>Second Wind </span> Rehabilitation Program"
                        />
                    </div>
                </div>

                <div className="div" style={{borderBottom: "1px solid #e5e5e5", paddingBottom: "75px"}}>
                The Second Wind Rehabilitation Program is a 501(c)(3) non-profit organization that provides professional services tailored specifically for low-income and/or unhoused individuals. Dedicated to bridging the gap between your individualized economic stressors and a more stable, self-sufficient lifestyle, our program offers various resources including job training, shelter, mental health support, and other essential needs. Please don't hesitate to contact us if you need our assistance or if you would like to get involved by donating or volunteering. Your support helps us continue our mission of empowering individuals towards a brighter future.
                <div style={{textAlign:"center"}}>
                    <button style={{textAlign:"center", marginTop:"25px", padding:"15px", fontWeight:"bold",backgroundColor:"#1e5aca", color:"white", border:"none" }} onClick={() => window.open("https://secondwindservices.org/", '_blank')}  >More Information</button>
                </div>
                </div>
                {/* <div
                    className={`row row-gutter-0 pricing-items-style1 ${pricingClassOption}`}
                    data-aos="fade-up"
                    data-aos-duration="1100"
                >
                    {HomeData[7].pricing &&
                        HomeData[7].pricing.map((single, key) => {
                            return (
                                <div
                                    key={key}
                                    className="col-sm-6 col-md-6 col-lg-3"
                                >
                                    <PricingItem key={key} data={single} />
                                </div>
                            );
                        })}
                </div> */}
            </div>
        </div>
    );
};

PricingContainer.propTypes = {
    pricingClassOption: PropTypes.string,
};
PricingContainer.defaultProps = {
    pricingClassOption: "row row-gutter-0 pricing-items-style1",
};

export default PricingContainer;
