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
    const form = document.querySelector(".form");
    form.style.display = "flex";
  };

  const options = {
    behavior: "smooth",
    block: "center",
  };

  return (
    <div>
      {active ? (
        <div>
          <form className="form">
            <div
              className="form__close"
              onClick={(e) => {
                e.target.parentElement.style.display = "none";
              }}
            >
              +
            </div>
            <div className="form__inner">
              <div className="form__inner__title title">Sign in</div>
              <div className="form__input__text">Email</div>
              <input type="email" className="form__input" required />
              <div className="form__input__text">Password</div>
              <input type="password" className="form__input" required />
              <button className="form__button active">Sign in</button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <form className="form">
            <div
              className="form__close"
              onClick={(e) => {
                e.target.parentElement.style.display = "none";
              }}
            >
              +
            </div>
            <div className="form__inner">
              <div className="form__inner__title title">Sign up</div>
              <div className="form__input__text">Username</div>
              <input type="text" className="form__input" required />
              <div className="form__input__text">Email</div>
              <input type="email" className="form__input" required />
              <div className="form__input__text">Password</div>
              <input type="password" className="form__input" required />
              <div className="form__input__text">Repeat password</div>
              <input type="password" className="form__input" required />
              <button className="form__button active">Sign up</button>
            </div>
          </form>
        </div>
      )}
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
    </div>
  );
};
