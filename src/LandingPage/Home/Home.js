import "./home.css";
import { NavLink,Link } from "react-router-dom";

const Home = () => (
    <>
        <header>{/* nav bar */}</header>

        <section className="home">
            <div className="hero">
                <div className="left">
                    <div className="text">
                        <h2>
                            Lets{" "}
                            <span className="text-H">
                                Build and Collaborate
                            </span>{" "}
                            together with linquester
                        </h2>
                        <p>
                            Harnessed the productivity. Developed for the
                            collaboration. welcome to the platform where you
                            find the right teammates for the upcoming projects
                        </p>
                    </div>
                    <div className="button">
                       <NavLink exact to="/login"> <button className="sig">Signin now</button></NavLink>
                        <button className="learn">Learn more</button>
                    </div>
                </div>
                <div className="right">
                    <img
                        src={require("../assets/images/herolin.gif")}
                        alt="hero.bgm"
                    />
                </div>
            </div>
        </section>
    </>
);

export default Home;
