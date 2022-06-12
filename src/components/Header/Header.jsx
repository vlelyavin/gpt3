import classNames from "classnames";
import { React, useState } from "react";
import { Navbar } from "./Navbar/Navbar.jsx";
import { SignIn } from "../SignIn/SignIn.jsx";
import { SignUp } from "../SignUp/SignUp.jsx";
import menu from "../../images/menu.png";
import "./Header.scss";

export const Header = ({ home, about, features, blog }) => {
  const [flip, isFlipped] = useState(false);
  const [signIn, showSignIn] = useState(false);
  const [signUp, showSignUp] = useState(false);

  const toggleFlip = () => {
    isFlipped(!flip);
  };

  const showSignInForm = () => {
    showSignIn(!signIn);
  };

  const showSignUpForm = () => {
    showSignUp(!signUp);
  };

  const options = {
    behavior: "smooth",
    block: "center",
  };

  return (
    <div>
      {signUp ? <SignUp showSignUpForm={showSignUpForm} /> : null}
      {signIn ? <SignIn showSignInForm={showSignInForm} /> : null}

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
                onClick={showSignInForm}
                className={classNames("header__aside__button", {
                  active: signIn,
                })}
              >
                Sign in
              </button>
              <button
                onClick={showSignUpForm}
                className={classNames("header__aside__button", {
                  active: signUp,
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
