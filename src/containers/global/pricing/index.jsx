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
                            title="<span>Second Wind </span> Outreach Program"
                        />
                    </div>
                </div>

                <div className="div" style={{borderBottom: "1px solid #e5e5e5", paddingBottom: "75px"}}>
                Second Wind Behavorial Health Centers provide professional services tailored specifically for low-income and/or unhoused individuals, the Second Wind Outreach Program is dedicated to bridging the gap between your individualized economic stressors and a more stable, self-sufficient lifestyle. Through this program, you will be offered various resources that aid job training, shelter, mental health support and other essential needs. Contact us for more information.
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
