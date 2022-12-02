import "./working.css";

const Working = () => {
    return (
        <>
            <main>
                <section className="appUse" id="working">
                    <div className="main">
                        <div className="wh">
                            <h2>5 Simple steps to find your Ally</h2>
                            <p>
                                These are the few simple step method to find
                                your ally and network with them to build your
                                successful project
                            </p>
                        </div>
                        <div className="l">
                            <div className="lp">
                                <img
                                    src={require("../../assets/images/working.gif")}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Working;
