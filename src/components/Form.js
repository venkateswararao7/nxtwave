import React from "react";
import Header from "./Header";
import "./Form.css";
import hero from "./images/hero.svg";

function Form() {
  return (
    <div className="form">
      <Header />
      <div className="form__details">
        <div className="form__left">
          <h2>Item Details</h2>

          <div className="component">
            ITEM TITLE
            <input />
          </div>
          <div className="component">
            LINK
            <input />
          </div>
          <div className="component">
            ICON URL
            <input />
          </div>
          <div className="component">
            TAG NAME
            <select>
              <option>User</option>
            </select>
          </div>
          <div className="component">
            CATEGORY
            <input />
          </div>
          <div className="component">
            DESCRIPTION
            <textarea className="desc" />
          </div>

          <button>CREATE</button>
        </div>
        <div className="form__right">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Form;
