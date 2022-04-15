import React from "react";
import "./Benefits.scss";

export const Benefits = () => {
  const benefitsList = [
    {
      title: `Improving end distrusts instantly`,
      text: `From they fine john he give of rich he. They age and draw mrs
    like. Improving end distrusts may instantly was household
    applauded.`,
    },
    {
      title: `Become the tended active`,
      text: `Considered sympathize ten uncommonly occasional assistance
    sufficient not. Letter of on become he tended active enable to.`,
    },
    {
      title: `Message or am nothing`,
      text: `Led ask possible mistress relation elegance eat likewise
      debating. By message or am nothing amongst chiefly address.`,
    },
    {
      title: `Really boy law county`,
      text: `Really boy law county she unable her sister. Feet you off its
      like like six. Among sex are leave law built now. In built table
      in an rapid blush.`,
    },
  ];
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits__inner">
          <div className="benefits__intro">
            <h1 className="benefits__title title">
              The Future is Now and
              <br /> You Just Need To Realize
              <br /> It. Step into Future Today
              <br /> & Make it Happen.
            </h1>
          </div>
          <ul className="benefits__list">
            {benefitsList.map((item) => (
              <li className="list__item">
                <h4 className="list__item__title upperline">{item.title}</h4>
                <p className="list__item__text">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
