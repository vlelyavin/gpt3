import { Navbar } from "./Navbar/Navbar.jsx";
import { SignIn } from "../SignIn/SignIn.jsx";
import { SignUp } from "../SignUp/SignUp.jsx";
import { useReducer } from "react";
import { INITIAL_STATE, mainReducer } from "../../reducers/mainReducer.js";
import { CHANGE_FLIPPED_STATUS, CHANGE_SIGNED_IN_STATUS, CHANGE_SIGNED_UP_STATUS } from "../../actions/mainActions.js";
import classNames from "classnames";
import menu from "../../images/menu.png";
import "./Header.scss";

export const Header = (props) => {
  const [state, dispatch] = useReducer(mainReducer, INITIAL_STATE);

  const toggleFlip = () => {
    dispatch({ type: CHANGE_FLIPPED_STATUS, payload: !state.flipped });
  };

  const showSignInForm = () => {
    dispatch({ type: CHANGE_SIGNED_IN_STATUS, payload: !state.signedIn });
  };

  const showSignUpForm = () => {
    dispatch({ type: CHANGE_SIGNED_UP_STATUS, payload: !state.signedUp });
  };

  return (
    <div>
      {state.signedUp ? <SignUp showSignUpForm={showSignUpForm} /> : null}
      {state.signedIn ? <SignIn showSignInForm={showSignInForm} /> : null}
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__main">
              <button onClick={() => props.home.current.scrollIntoView(props.options)} className="header__title">
                GPT-3
              </button>
              <div className="header__navbar">
                <Navbar
                  home={props.home}
                  about={props.about}
                  features={props.features}
                  blog={props.blog}
                  options={props.options}
                />
              </div>
            </div>
            <aside className="header__aside">
              <button
                onClick={showSignInForm}
                className={classNames("header__aside__button", {
                  active: state.signedIn,
                })}
              >
                Sign in
              </button>
              <button
                onClick={showSignUpForm}
                className={classNames("header__aside__button", {
                  active: state.signedUp,
                })}
              >
                Sign up
              </button>
              {state.flipped ? (
                <nav className="header__aside__menu">
                  <Navbar
                    home={props.home}
                    about={props.about}
                    features={props.features}
                    blog={props.blog}
                    options={props.options}
                  />
                </nav>
              ) : null}
              <img
                src={menu}
                alt="menuIcon"
                onClick={toggleFlip}
                className={classNames("header__aside__icon", {
                  flip: state.flipped,
                })}
              />
            </aside>
          </div>
        </div>
      </header>
    </div>
  );
};
