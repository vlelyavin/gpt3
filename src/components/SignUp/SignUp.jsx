import "./SignUp.scss";

export const SignUp = (props) => {
  return (
    <form className="form">
      <div className="form__close" onClick={props.showSignUpForm}>
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
  );
};
