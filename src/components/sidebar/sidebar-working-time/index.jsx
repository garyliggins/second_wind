import { Link } from "react-router-dom";
import SidebarTitle from "../sidebar-title";

const SidebarWorkingTime = () => {
    return (
        <div className="widget-item">
            <div className="widget-work-hours">
                <SidebarTitle classOption="title" title="Counseling Hours" />
                <ul>
                    <li>
                        <span className="work-day">Monday</span>
                        <span className="work-hours">9:00AM - 5:00PM</span>
                    </li>
                    <li>
                        <span className="work-day">Tuesday</span>
                        <span className="work-hours">9:00AM - 5:00PM</span>
                    </li>
                    <li>
                        <span className="work-day">Wednesday</span>
                        <span className="work-hours">9:00AM - 5:00PM</span>
                    </li>
                    <li>
                        <span className="work-day">Thursday</span>
                        <span className="work-hours">9:00AM - 5:00PM</span>
                    </li>
                    <li>
                        <span className="work-day">Friday</span>
                        <span className="work-hours">9:00AM - 5:00PM</span>
                    </li>
                    <li>
                        <span className="work-day">Saturday</span>
                        <span className="work-hours">9:00AM - 4:00PM</span>
                    </li>
                    <li>
                        <span className="work-day">Sunday</span>
                        <span className="work-hours">Closed</span>
                    </li>
                </ul>
                <Link className="btn-theme btn-white" to="/contact">
                    REQUEST A CONSULTATION
                </Link>
            </div>
        </div>
    );
};

export default SidebarWorkingTime;
