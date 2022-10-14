import "./SignIn.scss";

export const SignIn = (props) => {
  return (
    <form className="form">
      <div className="form__close" onClick={props.showSignInForm}>
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
  );
};
