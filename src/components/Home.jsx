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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, natus officia obcaecati recusandae fugiat nam facilis quidem facere iure enim culpa ipsam doloremque mollitia, quod consequuntur. Similique magni quae excepturi!</p>
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugiat dicta, perferendis repellat ipsa nostrum debitis quidem labore ipsam? Quia alias quam dolorem nesciunt accusantium. Quis aspernatur delectus error repellendus.</p>
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
