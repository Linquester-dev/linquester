import "./styles/navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiNetworkChart } from "react-icons/bi";
import { FcAbout, FcBusinessContact } from "react-icons/fc";
import { useState } from "react";
const Navbar = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav>
            <a
                href="#"
                onClick={() => setActiveNav("#")}
                className={activeNav === "#" ? "active" : ""}
            >
                <AiOutlineHome />
            </a>
            <a
                href="#working"
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "active" : ""}
            >
                <FcAbout />
            </a>
            <a
                href="#intro"
                onClick={() => setActiveNav("#intro")}
                className={activeNav === "#intro" ? "active" : ""}
            >
                <BiNetworkChart />
            </a>
            <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "active" : ""}
            >
                <FcBusinessContact />
            </a>
        </nav>
    );
};
export default Navbar;
