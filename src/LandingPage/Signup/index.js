import "./index.css";
import React, { useState } from "react";
import SkillSet from "./SkillSet";

const Signup = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    setItems((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
           return index !== id; 
        }) 
    })
  };

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h1 className="form-title">Complete Your Profile</h1>
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="college">
                    <i class="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="text"
                    name="college"
                    id="college"
                    autoComplete="off"
                    placeholder="Institution"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="number">
                    <i class="zmdi zmdi-phone-in-talk"></i>
                  </label>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    autoComplete="off"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="Your number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="work">
                    <i class="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    autoComplete="off"
                    placeholder="Your Profession"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Password"
                  />
                </div>
                <div className="main-div">
                  <div className="center-div">
                    <br />
                    <h1>Add Your Skills</h1>
                    <br />
                    <input
                      type="text"
                      placeholder="Type Here"
                      className="input-skill"
                      value={inputList}
                      onChange={itemEvent}
                    />
                    <button className="skill-button" onClick={listOfItems}>
                      +
                    </button>
                    <ol>
                      {items.map((itemval, index) => {
                        return (
                          <SkillSet
                            key={index}
                            id={index}
                            text={itemval}
                            onSelect={deleteItems}
                          />
                        );
                      })}
                    </ol>
                  </div>
                </div>
                <div className="form-group form-button">
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/group-discussion-3247438-2708924.png" />
              </figure>
              <input
                    type="submit"
                    name="signup"
                    id="signup"
                    classname="form-submit"
                    value="Commit Changes"
                  ></input>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Signup;
