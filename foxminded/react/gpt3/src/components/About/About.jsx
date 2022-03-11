import "./About.scss";

export const About = ({ about, access, title }) => {
  const possibilitiesList = [
    {
      title: `Chatbots`,
      text: `We so opinion friends me message as delight. Whole front do of
  plate heard oh ought.`,
      id: 1,
    },
    {
      title: `Knowledgebase`,
      text: `At jointure ladyship an insisted so humanity he. Friendly
      bachelor entrance to on by. As put impossible own apartments b`,
      id: 2,
    },
    {
      title: `Education`,
      text: `At jointure ladyship an insisted so humanity he. Friendly
      bachelor entrance to on by. As put impossible own apartments b`,
      id: 3,
    },
  ];
  return (
    <section className="about" ref={about}>
      <div className="container">
        <div className="about__inner">
          <div className="about__header">
            <h1 className="about__title upperline">What is GPT-3</h1>
            <p className="about__header__text">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </p>
          </div>
          <div className="about__main">
            <h1 className="about__main__title title">{title}</h1>
            {access}
          </div>
          <ul className="about__footer">
            {possibilitiesList.map((item) => (
              <li className="about__footer__column" key={item.id}>
                <p className="about__title upperline">{item.title}</p>
                <p className="column__text">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
