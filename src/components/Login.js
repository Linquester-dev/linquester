import React, { useState } from "react";

import "./styles/login.css";
function Contact() {
    const [data, setData] = useState({
        username: "",
        password: "",
    });
    const { username, password } = data;
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
                <div className="login">
                    <div className="heading">
                        <h1>Welcome back Ally!</h1>
                        <br />
                        <br />
                        {/* <span>Login using the social networks</span> */}
                        {/* <ul>
                                <li>G</li>
                                <li>F</li>
                                <li>T</li>
                            </ul> */}
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
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    placeholder="Password"
                                    onChange={changeHandler}
                                />
                                <br />
                                <div className="fgp">
                                    <input
                                        type="submit"
                                        name="submit"
                                        className="submit"
                                    />
                                    <p>forget password?</p>
                                </div>
                            </form>
                        </div>
                        <div className="left">
                            <h2>or</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
