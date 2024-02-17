import "../style/Header.css";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="container">
            <div className="diver" id="firstdiver">
                <ul>
                    <li>
                        <NavLink exact to="/" id="yo">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Council" id="yo">
                            Council
                        </NavLink>
                    </li>
                    <NavLink exact to="/donate" id="yo">
                        <li>Group</li>
                    </NavLink>
                </ul>
            </div>

            <div className="diver2">
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider" />
                </label>
            </div>
        </div>
    );
}

export default Header;
