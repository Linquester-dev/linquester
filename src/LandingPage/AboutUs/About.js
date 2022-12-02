import "./about.css";

const Home = () => (
    <>
        <main>
            <section className="home" id="about">
                <div className="hero">
                    <div className="title">
                        <h2>Let's build together</h2>

                        <p className="titlep">
                            Harnessed for productivity.Developed for
                            collaboration. welcome to the platform where you
                            find the right partners for your upcoming projects.
                        </p>
                        <div className="button">
                            <button>Learn more </button>
                        </div>
                    </div>
                    <div className="heroImg">
                        <img
                            src={require("../../assets/images/Mask group.png")}
                            alt="hero.png"
                            className="heroI"
                        />
                    </div>
                </div>
            </section>
        </main>
    </>
);

export default Home;
