import communiation from "./images/communication.png";
import counciler from "./images/counciler.png";
import { NavLink } from "react-router-dom";
import "../style/Home.css";
function Home() {
    return (
        <div>
            <div className="container1">
                <div className="content" id="cont1">
                    <h1>Are You Looking for Career Counselling Online?</h1>
                    <p>Welcome to our Online Career Counselling Platform, a comprehensive guide to help you navigate your professional journey with confidence and clarity. Our mission is to provide you with personalized guidance, resources, and support to make informed decisions about your career path.!</p>
                </div>
                <div className="content1Image">
                    <img src={communiation} alt="communinatoin" />
                </div>
            </div>

            <div className="container1">
                <div className="content1Image">
                    <img src={counciler} alt="" />
                </div>
                <div className="content" id="cont2">
                    <h1>Check Out over perfect counciler.</h1>
                    <p>Our team comprises certified career coaches, industry professionals, and psychologists who are dedicated to helping you make the right choices. They bring diverse experiences and insights to the table, ensuring a holistic approach to your career development.</p>
                    <button className="button-26">
                        <NavLink exact={"true"} to="/Councilers" id="button1">
                            Book Counciler
                        </ NavLink>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Home
