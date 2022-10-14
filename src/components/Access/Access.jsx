import "./Access.scss";

export const Access = ({ earlyAccess }) => {
  return (
    <section className="access" ref={earlyAccess}>
      <p className="access__title title">
        Do you want to step into the
        <br />
        future before others
      </p>
      <button className="access__button">Request early access</button>
    </section>
  );
};
