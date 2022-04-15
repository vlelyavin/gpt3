import React from "react";
import classNames from "classnames";
import { useState } from "react";
import { Navbar } from "./Navbar/Navbar.jsx";
import menu from "../../images/menu.png";
import "./Header.scss";

export const Header = ({ home, about, features, blog }) => {
  const [active, isActive] = useState(false);
  const [flip, isFlipped] = useState(false);

  const toggleFlip = () => {
    isFlipped(!flip);
  };

  const toggleClass = () => {
    isActive(!active);
  };

  const options = {
    behavior: "smooth",
    block: "center",
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__main">
            <button onClick={() => home.current.scrollIntoView(options)} className="header__title">
              GPT-3
            </button>
            <div className="header__navbar">
              <Navbar home={home} about={about} features={features} blog={blog} />
            </div>
          </div>

          <aside className="header__aside">
            <button
              onClick={toggleClass}
              className={classNames("header__aside__button", {
                active: active,
              })}
            >
              Sign in
            </button>
            <button
              onClick={toggleClass}
              className={classNames("header__aside__button", {
                active: !active,
              })}
            >
              Sign up
            </button>
            {flip ? (
              <nav className="header__aside__menu">
                <Navbar home={home} about={about} features={features} blog={blog} />
              </nav>
            ) : null}

            <img
              src={menu}
              alt="menuIcon"
              onClick={toggleFlip}
              className={classNames("header__aside__icon", {
                flip: flip,
              })}
            />
          </aside>
        </div>
      </div>
    </header>
  );
};