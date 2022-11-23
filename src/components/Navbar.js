import { Link } from "react-router-dom";

import "./index.css";
import {
    AiHome,
    AiFillProfile,
    AiOutlineLogin,
    AiOutlineUserAdd,
} from "react-icons/ai";
import { FaPeopleArrows } from "react-icons/fa";

const Header = () => (
    <nav className="nav-header">
        <div className="blog-container">
            <ul className="nav-menu">
                <li>
                    <Link to="/" className="nav-link">
                        <AiHome />
                    </Link>
                </li>
                <li>
                    <Link to="/profile" className="nav-link">
                        <AiFillProfile />
                    </Link>
                </li>
                <li>
                    <Link to="/login" className="nav-link">
                        <AiOutlineLogin />
                    </Link>
                </li>
                <li>
                    <Link to="/signup" className="nav-link">
                        <AiOutlineUserAdd />
                    </Link>
                </li>
                <li>
                    <Link to="/ally" className="nav-link">
                        <FaPeopleArrows />
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Header;
