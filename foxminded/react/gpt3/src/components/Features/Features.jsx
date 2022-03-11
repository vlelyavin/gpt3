import "./Features.scss";
import featuresImage from "../../images/features.svg";

export const Features = ({ features, access, title }) => {
  return (
    <section className="features" ref={features}>
      <div className="container">
        <div className="features__inner">
          <img src={featuresImage} alt="" className="features__image" />
          <div className="features__content">
            <p className="features__title title">{title}</p>
            <p className="features__text">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            {access}
          </div>
        </div>
      </div>
    </section>
  );
};
