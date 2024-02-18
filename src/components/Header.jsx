import "../style/Header.css";
import { NavLink } from "react-router-dom";
import log from "./images/log.png";

function Header() {
    return (
        <div className="container">
            <div className="diver" id="firstdiver">
                <div>
                    <ul>
                        <li>
                            <NavLink exact={"true"} to="/" id="yo">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact={"true"} to="/Council" id="yo">
                                Council
                            </NavLink>
                        </li>
                        <NavLink exact={"true"} to="/donate" id="yo">
                            <li>Group</li>
                        </NavLink>

                    </ul >
                </div>
            </div >
                <div id="log">
                    <NavLink exact={"true"} to="/register">
                        <img src={log} alt="" />
                    </NavLink>
                </div>

        </div >
    );
}

export default Header;
