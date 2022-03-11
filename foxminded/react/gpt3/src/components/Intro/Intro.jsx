import "./Intro.scss";
import face from "../../images/face.svg";
import avatars from "../../images/avatars.png";
import companies from "../../images/logos.png";

export const Intro = ({ home }) => {
  return (
    <section className="intro" ref={home}>
      <div className="container">
        <div className="intro__inner">
          <div className="intro__content">
            <h1 className="intro__title title">
              Let’s Build Something amazing with GPT-3 OpenAI
            </h1>
            <p className="intro__text text">
              Yet bed any for travelling assistance indulgence unpleasing.
              <br /> Not thoughts all exercise blessing. Indulgence way
              <br />
              everything joy alteration boisterous the attachment. Party
              <br /> we years to order allow asked of.
            </p>
            <div className="intro__inputline">
              <input
                type="text"
                className="intro__input"
                placeholder="Your Email Address"
              />
              <button className="intro__button">Get started</button>
            </div>
            <div className="intro__reviews">
              <img
                src={avatars}
                alt="avatars"
                className="intro__reviews__avatars"
              />
              <p className="intro__reviews__text">
                1,600 people requested access a visit in last 24 hours
              </p>
            </div>
          </div>
          <img className="intro__image" src={face} alt="face" />
        </div>
        <div className="intro__companies">
          <img
            src={companies}
            alt="companies"
            className="intro__companies__image"
          />
        </div>
      </div>
    </section>
  );
};
