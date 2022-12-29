import React, { useState } from "react";

import "./styles/login.css";
function Contact() {
    const [data, setData] = useState({
        username: "",
    });
    const { username } = data;
    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: [e.target.value],
        });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
    };
    return (
        <>
            <section className="loginPage">
                <div className="l">
                    <div className="login">
                        <div className="heading">
                            <h1>Welcome back Ally!</h1>
                            <br />
                            <br />
                        </div>
                        <div className="input">
                            <div className="left">
                                <form onSubmit={submitHandler}>
                                    <input
                                        type="text"
                                        name="username"
                                        value={username}
                                        placeholder="Email"
                                        onChange={changeHandler}
                                    />
                                    <br />
                                    <div className="fgp">
                                        <input
                                            type="submit"
                                            name="submit"
                                            className="submit"
                                        />
                                        <p>create new account</p>
                                    </div>
                                </form>
                            </div>
                            <div className="left">
                                <hr />
                            </div>
                        </div>
                        <div className="logos">
                            <div className="logo">
                                <img
                                    src={require("../assets/wp/fb.png")}
                                    alt="fb"
                                />
                            </div>
                            <div className="logo">
                                <img
                                    src={require("../assets/wp/mail.png")}
                                    alt=""
                                />
                            </div>
                            <div className="logo">
                                <img
                                    src={require("../assets/wp/git.png")}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
