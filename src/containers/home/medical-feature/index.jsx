import SectionTitle from "../../../components/section-title";
import HomeData from "../../../data/home.json";
import MedicalFeature from "../../../components/medical-feature";

const MedicalFeatureContainer = () => {
    return (
        <section className="feature-section bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            subTitle="Why Choose Second Wind"
                            title="<span>Your Foundation</span> For Success"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-xl-8">
                        <div
                            className="row icon-box-style"
                            data-aos="fade-up"
                            data-aos-duration="1100"
                        >
                            {HomeData[3].medicalFeature &&
                                HomeData[3].medicalFeature.map(
                                    (single, key) => {
                                        return (
                                            <div key={key} className="col-md-6">
                                                <MedicalFeature
                                                    key={key}
                                                    data={single}
                                                />
                                            </div>
                                        );
                                    }
                                )}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="thumb"
                data-aos="fade-left"
                data-aos-duration="1500"
            >
                <img
                    src={
                        process.env.PUBLIC_URL + "./img/photos/prosperity1.jpeg"
                    }
                    alt="hope"
                />
            </div>
        </section>
    );
};

export default MedicalFeatureContainer;
